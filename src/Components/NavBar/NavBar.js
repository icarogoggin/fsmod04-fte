import React from 'react';

export function NavBar() {
  return (
    <div class="page-wrapper">
      <nav class="navbar">
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
          <a href="/profilelogin">
            <img className="profileImage" src="https://icons-for-free.com/iconfiles/png/512/business+human+person+profile+seo+user+icon-1320186746402784223.png" alt="teste de imagem"/>
          </a>
        </ul>
      </nav>
    </div>
  );
}
