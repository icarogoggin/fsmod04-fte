import React from 'react';
import { Redirect, Route } from 'react-router';
import { JwtHandler } from '../../Components/jwt-handler/JwtHandler';

export default function GuardedRoute({ component: Component, ...rest }) {
  const auth = JwtHandler.isJwtValid();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
