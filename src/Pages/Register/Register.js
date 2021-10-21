import React from 'react';
import { Api } from '../../Components/Api/api';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';

function CreateUser(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpf = event.target.cpf.value;
    const payload = {
      name,
      lastName,
      email,
      password,
      cpf,
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
      payload,
    );

    const body = await response.json();

    if (response.status === 201) {
      props.history.push(`/login`);
      console.log(body)
    } else {
      // Error
    }
  };

  return (
    <div>
            <div>
        <NavBar />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="name">
            Nome:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label className="form__label" htmlFor="lastName">
            Sobrenome:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div>
          <label className="form__label" htmlFor="email">
            E-mail:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="form__label" htmlFor="password">
            Senha:
          </label>
        </div>

        <div>
          <input
            className="form__input-number"
            type="text"
            id="password"
            name="password"
          />
        </div>
        <div>
          <label className="form__label" htmlFor="cpf">
            CPF:
          </label>
        </div>

        <div>
          <input
            className="form__input-number"
            type="text"
            id="cpf"
            name="cpf"
          />
        </div>
        <div>
          <input className="form__submit" type="submit" value="Add" />
        </div>
        <Link to="/">
        <button className="form__submit" width="320px">Voltar</button>
      </Link>
      </form>
    </div>
  );
}

export default CreateUser;
