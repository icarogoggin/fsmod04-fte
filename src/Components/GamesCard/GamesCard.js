import React from "react";
import { useHistory } from "react-router";

export default function GamesCard({ game }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/games/${game.id}`);
  };

  return (
    <li>
      <img src={game.cover} alt={game.title} className="cardimage" />
      <div class="cardtitle">{game.title}</div>
    </li>
  );
}
