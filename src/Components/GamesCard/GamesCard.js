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
      <figure class="gamescard__li__cardgame">
        <img src={game.cover} alt={game.title} />
        <figcaption>
          {/* <h2>
            {game.title}
          </h2>
            <span>{game.year}</span>
          <p> {game.description}[...]</p> */}
          <div className="button__cardgame">
          <Link href="#" class="button__cardgame__add">{/* follow */}
            ADD
          </Link>
          <Link to={`/view/${game.id}`} class="button__cardgame__info">{/* info */}
            INFO
          </Link>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
