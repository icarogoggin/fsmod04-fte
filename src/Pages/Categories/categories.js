import { React, useEffect, useState } from 'react';
import { Api } from '../../Components/Api/api';
import { NavBar } from '../../Components/NavBar/NavBar';
import GamesGenre from '../../Components/GamesGenre/GamesGenre';

export default function Genero() {
  const [categories, setCategorias] = useState([]);
  useEffect(() => {
    const loadCategoriasList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
      const results = await response.json();
      setCategorias(results);
    };
    console.log({ categories });
    loadCategoriasList();
  }, []);

  return (
    <>
      <div>
      <NavBar/>
        <div>
          {categories.map((categorie, index) => (
            <GamesGenre key={index} categorie={categorie}></GamesGenre>
          ))}
        </div>
      </div>
    </>
  );
}