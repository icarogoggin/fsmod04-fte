import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../Components/Api/api';
import { NavBar } from '../../Components/NavBar/NavBar';
import { JwtHandler } from '../../Components/jwt-handler/JwtHandler';

export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;

      JwtHandler.setJwt(accessToken);

      console.log({ accessToken });

      props.history.push(`/`);
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
          <label className="form__label" htmlFor="email">
            e-mail:
          </label>
        </div>
        <div>
          <input
            className="form__input-text"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label className="form__label" htmlFor="password">
            password:
          </label>
        </div>

        <div>
          <input
            className="form__input-number"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <input className="form__submit" type="submit" value="Login" />
        </div>
        <Link to="/register">
          <button className="form__submit" width="320px">
            Crie uma conta
          </button>
        </Link>
      </form>
    </div>
  );
}
