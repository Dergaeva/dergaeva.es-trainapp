import React from 'react';


import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { Pages } from './pages';

import './app.scss';


export const App = () => (
  <div>
    <Header />
       <Pages />
    <Footer />
  </div>
);
