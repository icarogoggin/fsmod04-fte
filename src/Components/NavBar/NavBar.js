import React from 'react';

export function NavBar() {
  
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <ul className="containerlist">
          <li className="nav-item">
          <img
          className="navbarLogo"
          src="https://image.flaticon.com/icons/png/512/588/588257.png"
          alt="xbox blue"
        />
          </li>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/categorias">Categorias</a>
          </li>
          <li className="nav-item">
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
