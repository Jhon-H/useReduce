import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  user_,
  ...rest
}) => {

  return (
    <div>
      <Navbar />
      <Route {...rest}
        component={(props) => (
          (isAuthenticated)
            ? (<Component {...props} _/>)
            : (<Redirect to="/auth" />)
        )}
      />
    </div>
  )
}
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
