import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './src/Pages/Home/home';
import Categories from './src/Pages/Categories/categories';
import AccountConfig from './src/Pages/AccountConfig/accountConfig';
import InfoView from './src/Pages/Info/info';
import Login from './src/Pages/Login/login';
import ProfileLogin from './src/Pages/ProfileLogin/profileLogin';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/accountconfig" component={AccountConfig} />
        <Route path="/info/:id" component={InfoView} />
        <Route path="/login" component={Login} />
        <Route path="/profilelogin" component={ProfileLogin} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
