import React from 'react';
import PropTypes from 'prop-types';

import {
  ContentBlock,
  ContentBlockTitle,
  Framework7App,
  List,
  ListItem,
  Navbar,
  Page,
  Pages,
  Statusbar,
  View,
  Views
} from 'framework7-react';

import { routes } from '../routes';

const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
        {context.framework7AppContext.theme.ios ? (
          <Navbar title="Framework7" />
        ) : null}
        <Pages>
          <Page>
            {context.framework7AppContext.theme.material ? (
              <Navbar title="Framework7" />
            ) : null}

            <ContentBlockTitle>Welcome to my App</ContentBlockTitle>
            <ContentBlock inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </ContentBlock>

            <ContentBlockTitle>Navigation</ContentBlockTitle>
            <List>
              <ListItem link="/about/" title="About"></ListItem>
              <ListItem link="/lorem/" title="Lorem"></ListItem>
            </List>
          </Page>
        </Pages>
      </View>
    </Views>
  );
};

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object
};

const App = () => (
  <Framework7App themeType="ios" routes={routes}>
    <Statusbar />
    <MainViews />
  </Framework7App>
);

export default App;
