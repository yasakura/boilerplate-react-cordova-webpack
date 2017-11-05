import React from 'react';
import { Page, ContentBlock, Navbar } from 'framework7-react';

export const Lorem = () => (
  <Page>
    <Navbar title="Lorem" backLink="Back" sliding />
    <ContentBlock inner>
      <p>Here is Lorem page !</p>
      <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
    </ContentBlock>
  </Page>
);
