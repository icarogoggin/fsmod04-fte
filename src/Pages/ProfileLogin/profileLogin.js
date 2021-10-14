import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

function ProfileLogin() {
  return (
    <body>
      <header class="main-navigation">
        <svg
          class="icon"
          width="600"
          height="162"
          viewBox="0 0 600 162"
          xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Xbox_wordmark.svg/293px-Xbox_wordmark.svg.png"
        >
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Xbox_wordmark.svg/293px-Xbox_wordmark.svg.png"
            width="550px"
          />
        </svg>
      </header>
      <main>
        <div class="container">
          <div class="animation-container">
            <header>
              <h1>Escolha o seu perfil</h1>
            </header>
            <div class="profile-container">
              <div class="profile">
                <div class="card1">
                  <a href="index.html">
                    <div class="title">Pessoa 1</div>
                  </a>
                </div>
              </div>
              <div class="profile">
                <div class="card2">
                  <a href="index.html">
                    <div class="title">Pessoa 2</div>
                  </a>
                </div>
              </div>
              <div class="profile">
                <div class="card3">
                  <a href="index.html">
                    <div class="title">Pessoa 3</div>
                  </a>
                </div>
              </div>
            </div>
            <Link to="/config">
              <button class="manage-profiles">CONFIGURAÇÃO</button>
            </Link>
          </div>
        </div>
      </main>
    </body>
  );
}

export default ProfileLogin;
