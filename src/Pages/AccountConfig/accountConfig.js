import React, { useEffect, useState } from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Api } from '../../Components/Api/api';
import '../../Components/NavBar/NavBar.css';

function AccountConfig(props) {
  // substituir props pelo user autenticated
  const id = props.match.params.id;

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readByUserIdUrl(id));

      const results = await response.json();

      setUser(results);
    };

    loadUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
      payload,
    );

    const body = await response.json();

    if (response.status === 200) {
      const id = body.id;

      props.history.push(`/profilelogin/`);
    } else {
      // Error
    }
  };

  return (
    <section>
      <div>
        <NavBar />
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label className="form__label" htmlFor="name">
              name:
            </label>
          </div>

          <div>
            <input
              className="form__input-text"
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
            />
          </div>
          <div>
            <label className="form__label" htmlFor="lastName">
              lastName:
            </label>
          </div>

          <div>
            <input
              className="form__input-text"
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={user.lastName}
            />
          </div>
          <div>
            <label className="form__label" htmlFor="email">
              e-mail:
            </label>
          </div>

          <div>
            <input
              className="form__input-text"
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
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
              type="text"
              id="password"
              name="password"
              defaultValue={user.password}
            />
          </div>
          <div>
            <label className="form__label" htmlFor="cpf">
              cpf:
            </label>
          </div>

          <div>
            <input
              className="form__input-number"
              type="text"
              id="cpf"
              name="cpf"
              defaultValue={user.cpf}
            />
          </div>
          <div>
            <input className="form__submit" type="submit" value="Edit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AccountConfig;
