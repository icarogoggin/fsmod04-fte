import React from 'react';
import { GamesList } from '../../Components/GamesList/GamesList';
import { NavBar } from '../../Components/NavBar/NavBar';
import './home.css';
import '../../Components/GamesCard/Card.css';
import '../../Components/NavBar/NavBar.css';

export default function Home() {
  return (
    <section>
      <div>
        <NavBar />
      </div>
      <h2 className="titleshome">Jogos</h2>
      <div>
        <GamesList />
      </div>
      <h2 className="titleshome">Categoria 1</h2>
      <div>
        <GamesList />
      </div>
      <h2 className="titleshome">Categoria 2</h2>
      <div>
        <GamesList />
      </div>
    </section>
  );
}
