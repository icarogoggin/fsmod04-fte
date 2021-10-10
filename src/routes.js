import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/home';
import Categories from './Pages/Categories/categories';
import AccountConfig from './Pages/AccountConfig/accountConfig';
import InfoView from './Pages/Info/info';
import Login from './Pages/Login/login';
import ProfileLogin from './Pages/ProfileLogin/profileLogin';

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
