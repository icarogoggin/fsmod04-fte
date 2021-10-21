import React, { useEffect, useState } from 'react';
import { Api } from '../../Components/Api/api';
import { NavBar } from '../../Components/NavBar/NavBar';
import '../../Components/NavBar/NavBar.css';
import '../../Pages/Info/Info.scss';

export default function ViewGame(props) {
  const id = props.match.params.id;

  const [game, setGame] = useState(undefined);

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUrl(id));

      const results = await response.json();

      setGame(results);
    };

    loadGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="">
        <div>
          <NavBar />
        </div>
      </div>
      <div className="background__img__page">
        <img src={game.cover} alt={game.title} />
      </div>
      <div className="container-info">
        <div className="info-box">
          <div className="game-title">
            <h1>{game.title}</h1>
          </div>
          <p>{game.description}</p>
          <p>{game.year}</p>
          <p>{game.imdb}</p>
          <iframe width="560" height="315" src={game.trailer}>
            {' '}
          </iframe>
          <iframe width="560" height="315" src={game.gameplay}>
            {' '}
          </iframe>
          <p>{game.genres}</p>
        </div>
      </div>
    </div>
  );
}
