import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Api } from '../Api/api';

export default function GamesGenre({ categorie }) {
  const [categories, setCategorias] = useState([]);
  useEffect(() => {
    const loadCategoriaList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
      const results = await response.json();
      setCategorias(results);
    };
    console.log({ categories });
    loadCategoriaList();
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push(`/categorias/${categorie.id}`);
  };

  return (
    <>
      <div onClick={handleClick}>
        <h1>{categorie.name}</h1>
      </div>
    </>
  );
}