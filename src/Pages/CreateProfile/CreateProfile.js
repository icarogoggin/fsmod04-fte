import React from 'react';
import { Api } from "../../Components/Api/api";
import { NavBar } from '../../Components/NavBar/NavBar';


function CreateProfile(props) {
  const handleSubmit = async event => {
    event.preventDefault();

    const title = event.target.title.value;
    const image = event.target.image.value;
    const payload = {
        title,
        image,
        userId:1 
        // fazer o user pegar o props
    };
    console.log(payload);

    const response = await Api.buildApiPostRequest(
        Api.createProfileUrl(),
        payload
    );

    const body = await response.json();

    if (response.status === 201) {
        const id = body.id;
        props.history.push(`/home/${id}`);
    } else {
        // Error
    }
};

  return (
      <div>
    <div>
    <NavBar />
  </div>
  <h1>Adicione o seu perfil</h1>
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
                <label className="form__label" htmlFor="image">
                    image:
                </label>
            </div>

            <div>
                <input
                    className="form__input-text"
                    type="text"
                    id="image"
                    name="image"
                />
            </div>
            <div>
                <input className="form__submit" type="submit" value="Add" />
            </div>
        </form>
    </div>
    </div>
);
}

export default CreateProfile;