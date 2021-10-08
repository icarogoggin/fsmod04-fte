import { useState, useEffect } from "react";
import { Api } from "../Api/api";
import GamesCard from "../GamesCard/GamesCard";

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
    <div className="cards">
      {games.map((game, index) => (
        <GamesCard key={`game_list_${index}`} game={game}></GamesCard>
      ))}
    </div>
  );
};
