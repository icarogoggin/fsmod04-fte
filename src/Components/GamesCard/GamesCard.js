import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function GamesCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/games/${game.id}`);
  };

  return (
    <li className="gamescard__li">
      <figure className="gamescard__li__cardgame">
        <img src={game.cover} alt={game.title} />
        <figcaption>
          <div className="button__cardgame">
          <Link href="#" className="button__cardgame__add">
            ADD
          </Link>
          <Link to={`/view/${game.id}`} className="button__cardgame__info">
            INFO
          </Link>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
