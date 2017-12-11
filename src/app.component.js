import React from 'react';

import {Header} from '/../header';
import {Main} from '/../main';



export const App = (
  <div>
    <Header />
    <Error
      text="This is an error"
      color="red"
    />
    <br />
    <Main />
    <Footer />
  </div>
);
