import React from 'react';
import { Api } from "../../Components/Api/api";
import "../CreateGame/creategame.css";

function CreateGame(props) {
  const handleSubmit = async event => {
    event.preventDefault();

    const title = event.target.title.value;
    const cover = event.target.cover.value;
    const description = event.target.description.value;
    const year = +event.target.year.value;
    const imdb = +event.target.imdb.value;
    const trailer = event.target.trailer.value;
    const gameplay = event.target.gameplay.value;
    const payload = {
        title,
        cover,
        description,
        year,
        imdb,
        trailer,
        gameplay
    };
    console.log(payload);

    const response = await Api.buildApiPostRequest(
        Api.createGameUrl(),
        payload
    );

    const body = await response.json();

    if (response.status === 201) {
        const id = body.id;
        props.history.push(`/view/${id}`);
    } else {
        // Error
    }
};

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label className="form__label" htmlFor="title">
                    title:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="title"
                    name="title"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="cover">
                    cover:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="cover"
                    name="cover"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="description">
                    description:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="textbox"
                    id="description"
                    name="description"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="year">
                year:
                </label>
            </div>

            <div>
                <input
                    className="form__input-number"
                    type="number"
                    id="year"
                    name="year"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="imdb">
                imdb:
                </label>
            </div>

            <div>
                <input
                    className="form__input-number"
                    type="number"
                    id="imdb"
                    name="imdb"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="trailer">
                trailer:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="trailer"
                    name="trailer"
                />
            </div>
            <div>
                <label className="form__label" htmlFor="gameplay">
                gameplay:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="gameplay"
                    name="gameplay"
                />
            </div>
            <div>
                <input className="form__submit" type="submit" value="Add" />
            </div>
        </form>
    </div>
);
}

export default CreateGame;
