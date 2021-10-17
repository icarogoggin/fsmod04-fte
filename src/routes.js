import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Categories from './Pages/Categories/categories';
import AccountConfig from './Pages/AccountConfig/accountConfig';
import ViewGame from './Pages/Info/Info.js';
import Login from './Pages/Login/login';
import ProfileLogin from './Pages/ProfileLogin/profileLogin';
import CreateGame from './Pages/CreateGame/CreateGame';
import CreateProfile from './Pages/CreateProfile/CreateProfile';
import CreateUser from './Pages/Register/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/addgame" component={CreateGame} /> {/* rota exclusiva do admin */}
        <Route path="/home" component={Home} />  {/* corrigir imagem do profile no navbar e criar nova rota com o id no link pra fazer as categorias depois da autenticação*/}
        <Route path="/categories" component={Categories} />
        <Route path="/config" component={AccountConfig} />
        <Route path="/view/:id" component={ViewGame} /> {/* Corrigir css do card carregado pelo view id */}
        <Route path="/login" component={Login} /> {/* Colocar uma condição para testar se o token está valido e já redirecionar para rota profile login */}
        <Route path="/register" component={CreateUser} />
        <Route path="/profilelogin" component={ProfileLogin} /> {/* setar um css pra manter a img do perfil padrão*/}
        <Route path="/createprofile" component={CreateProfile} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
