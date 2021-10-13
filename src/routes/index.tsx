import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const Routes: React.FC = () => (
  <>
    <Route exact path="/" component={MainPage} />
  </>
);

export default Routes;
