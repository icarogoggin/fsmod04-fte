import {React, useState, useEffect } from "react";
import { Api } from "../Api/api";
import GamesCard from "../GamesCard/GamesCard";
import '../../Components/NavBar/NavBar.css';

export const CategoriesList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenresList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenresUrl());

      const results = await response.json();

      setGenres(results);
    };

    loadGenresList();
  }, []);

  return(
    <div className="cardcontainer">
    <ul className="cards">
      {genres.games.map((genre, index) => (
        <GamesCard key={`genre_list_${index}`} genre={genre}></GamesCard>
      ))}
    </ul>
    </div>
    );
}