import { React, useEffect, useState } from 'react';
import { Api } from '../Api/api';

export default function GenreWithGame(props) {
  const id = props.match.params.id;
  const [categories, setCategorias] = useState([]);

  useEffect(() => {
    const loadCategoriasList = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGenreWithGamesUrl(id),
      );
      const results = await response.json();
      setCategorias(results);
      console.log(results);
    };
    loadCategoriasList();
  }, [id]);

  return (
    <>
      <div>
        {categories.games.map((game, gameIndex) => (
          <div>{game.gameId}</div>
          
        ))}
      </div>
    </>
  );
}