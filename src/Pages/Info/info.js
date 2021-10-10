import React, { useEffect, useState } from "react";
import { Api } from "../../Components/Api/api";
import GamesCard from "../../Components/GamesCard/GamesCard";
// importar estilo dessa page

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
            </div>

            <GamesCard game={game} />
        </div>
    );
}