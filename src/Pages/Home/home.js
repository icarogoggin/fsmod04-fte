import React from 'react';
import { GamesList } from '../../Components/GamesList/GamesList';
import './home.css';
import '../../Components/GamesCard/Card.css';

export default function Home() {
  return (
    <div>
      <GamesList />
    </div>
  );
}
