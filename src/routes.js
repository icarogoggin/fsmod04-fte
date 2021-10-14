import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Categories from './Pages/Categories/categories';
import AccountConfig from './Pages/AccountConfig/accountConfig';
import ViewGame from './Pages/Info/Info';
import Login from './Pages/Login/login';
import ProfileLogin from './Pages/ProfileLogin/profileLogin';
import CreateGame from './Pages/CreateGame/CreateGame';
import CreateUser from './Pages/Register/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/addgame" component={CreateGame} /> {/* rota exclusiva do admin */}
        <Route path="/home" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/config" component={AccountConfig} />
        <Route path="/view/:id" component={ViewGame} />
        <Route path="/login" component={Login} /> {/* Colocar uma condição para testar se o token está valido e já redirecionar para rota profile login */}
        <Route path="/register" component={CreateUser} />
        <Route path="/profilelogin" component={ProfileLogin} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
