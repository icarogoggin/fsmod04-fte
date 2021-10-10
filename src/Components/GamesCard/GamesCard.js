import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function GamesCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/games/${game.id}`);
  };

  return (
    <li>
      <figure class="cardgame">
        <img src={game.cover} alt={game.title} />
        <figcaption>
          <h2>
            {game.title}
            <span>{game.year}</span>
          </h2>
          <p> {game.description}</p>
          <Link href="#" class="follow">
            ADD
          </Link>
          
          <Link href="#" class="info">
            INFO
          </Link>

        </figcaption>
      </figure>
    </li>
  );
}
