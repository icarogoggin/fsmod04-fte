import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuardedRoute from '../src/Components/GuardedRoute/GuardedRoute';
import Home from './Pages/Home/home';
import Categories from './Pages/Categories/categories';
import GamesGenre from './Components/GamesGenre/GamesGenre';
// import GamesCardList from './Pages/GenreList/GenreList';
import AccountConfig from './Pages/AccountConfig/accountConfig';
import ViewGame from './Pages/Info/Info.js';
import Login from './Pages/Login/login';
import ProfileLogin from './Pages/ProfileLogin/profileLogin';
import ProfileDelete from './Pages/ProfileDelete/ProfileDelete';
import CreateGame from './Pages/CreateGame/CreateGame';
import CreateProfile from './Pages/CreateProfile/CreateProfile';
import CreateUser from './Pages/Register/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <GuardedRoute path="/addgame" component={CreateGame} />
        {/* rota exclusiva do admin */}
        <Route exact path="/" component={Home} />
        <GuardedRoute path="/home/:id" component={Home} />
        {/* corrigir imagem do profile no navbar e criar nova rota com o id no link pra fazer as categories depois da autenticação*/}
        <Route exact path='/categorias' component={Categories}/>
        <Route exact path='/categorias/:id/withGame' component={GamesGenre}/>
        {/* <Route exact path='/categorias/:id' component={GamesCardList}/> */}
        <GuardedRoute exact path="/config/" component={AccountConfig} />
        <GuardedRoute exact path="/config/:id" component={AccountConfig} />
        <Route path="/view/:id" component={ViewGame} />
        {/* Corrigir css do card carregado pelo view id */}
        <Route path="/login" component={Login} />
        {/* Colocar uma condição para testar se o token está valido e já redirecionar para rota profile login */}
        <Route path="/register" component={CreateUser} />
        <GuardedRoute path="/profilelogin" component={ProfileLogin} />
        {/* setar um css pra manter a img do perfil padrão*/}
        <GuardedRoute path="/createprofile" component={CreateProfile} />
        <GuardedRoute path="/profiledelete/:id" component={ProfileDelete} />
        
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;