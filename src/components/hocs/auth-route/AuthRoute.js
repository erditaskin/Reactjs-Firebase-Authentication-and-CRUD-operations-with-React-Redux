import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BaseLayout from 'components/layout/auth-base-layout/AuthBaseLayout';

const AuthRoute = ({
  component: Component, 
  authenticated, 
  ...rest
}) => {
  return (
      <Route {...rest} render={ props => (
        !authenticated ?
        <BaseLayout>
          <Component {...props} />
        </BaseLayout> : 
        <Redirect to="/" />
      )} />
  );
};

export default AuthRoute;