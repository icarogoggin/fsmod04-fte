import {React, useState, useEffect } from "react";
import { Api } from "../Api/api";
import GamesCard from "../GamesCard/GamesCard";
import '../../Components/GamesCard/GamesCard.scss';

export const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGamesList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());

      const results = await response.json();

      setGames(results);
    };

    loadGamesList();
  }, []);

  return (
    <div className="cardcontainer">
    <ul className="cards">
      {games.map((game, index) => (
        <GamesCard key={`game_list_${index}`} game={game}></GamesCard>
      ))}
    </ul>
    </div>
  );
};
