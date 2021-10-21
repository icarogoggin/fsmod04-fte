import { useEffect, useState } from 'react';
import { Api } from "../../Components/Api/api";
import GamesCard from '../../Components/GamesCard/GamesCard';

export default function GamesCardList({ props }) {
    const id = props.match.params.id;

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenresList = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdGenreUrl(id));
      const results = await response.json();
      setGenres(results);
    };
    console.log({ genres });
    loadGenresList();
  }, []);

  
  return(
    <>
            
      <div className="app__list">
        
        {genres.games.map( (item) => (
              <GamesCard key={item.gameId} info={item}></GamesCard>
              ))}
      </div>
    </>
  )
}