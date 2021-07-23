import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BaseLayout from 'components/layout/base-layout/BaseLayout';

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  return (
    <Route {...rest} render={props => (
      authenticated ?
        <BaseLayout>
          <Component {...props} />
        </BaseLayout> :
        <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;