import React from "react";
import { useHistory } from "react-router";

export default function GamesCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/games/${game.id}`);
  };

  return (
    <div className="card">
      <div className="cardgame">
        <h2>{game.id}</h2>
        <h2>{game.title}</h2>
        <div onClick={handleClick}>
          <img src={game.cover} alt={game.title} height="300" />
        </div>
        <h2>{game.description}</h2>
        <h2>{game.year}</h2>
        <h2>{game.imdb}</h2>
        <h2>{game.trailer}</h2>
        <h2>{game.gameplay}</h2>
      </div>

      <div className="card__price">{game.imdb}</div>
    </div>
  );
}
