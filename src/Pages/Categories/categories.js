import React from 'react';
import { CategoriesList } from '../../Components/CategoriesList/CategoriesList';
import { NavBar } from '../../Components/NavBar/NavBar';
import '../../Components/NavBar/NavBar.css';

export default function Categories() {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <h2 className="titleshome">Jogos</h2>
      <div>
        <CategoriesList />
      </div>
    </section>
  );
}
