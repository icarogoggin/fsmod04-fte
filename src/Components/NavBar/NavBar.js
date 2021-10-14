import React from 'react';

export function NavBar() {
  return (
    <div class="page-wrapper">
      <nav class="navbar">
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="containerlist">
          <li class="nav-item">
          <img
          class="navbarLogo"
          src="https://image.flaticon.com/icons/png/512/588/588257.png"
          alt="xbox blue"
        />
          </li>
          <li class="nav-item">
            <a href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a href="/categories">Categorias</a>
          </li>
          <li class="nav-item">
            <a href="/config">Minha Conta</a>
          </li>
          {/* <li class="nav-item">
            <a href="#">Minha Conta</a>
          </li> */
          /* <li class="nav-item">
            <a href="#">Configurações</a>
          </li> */}
          <a href="/config">
            <img className="profileImage" src="https://cdn-icons-png.flaticon.com/512/180/180678.png" alt="teste de imagem"/>
          </a>
        </ul>
      </nav>
    </div>
  );
}
