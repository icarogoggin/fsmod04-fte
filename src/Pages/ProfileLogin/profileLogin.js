import React from 'react';
import { Link } from 'react-router-dom';
import { ProfilesList } from '../../Components/ProfilesList/ProfilesList';
import './profile.scss';

function ProfileLogin() {
  return (
    <div className="profile__container">
      <div className="profile__animation-container">
        <header>
          <h1>Escolha o seu perfil</h1>
        </header>
        <ProfilesList />
      </div>
      <div className="container__manage-profile">
      <Link to="/createprofile">
        <button class="profile__manage-profiles">ADD PERFIL</button>
      </Link>
      <Link to="/config">
        <button class="profile__manage-profiles">CONFIGURAÇÃO</button>
      </Link>
      </div>
    </div>
  );
}

export default ProfileLogin;