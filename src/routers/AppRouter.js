import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from '../components/Counter';
import isAuthContext from '../context/isAuthContext';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'


const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userGlobal, setUserGlobal] = useState('');

  const handleChangeIsAuth = (isAuth_, newUser) => {
    setIsAuth(isAuth_);
    setUserGlobal(newUser);
  }

  return (
    <isAuthContext.Provider value={{
      user: userGlobal,
      handleChangeIsAuth: handleChangeIsAuth
    }}>
      <Router>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuth}
          />
          <PrivateRoute
            path="/"
            component={Counter}
            isAuthenticated={isAuth}
          />
        </Switch>
      </Router>
    </isAuthContext.Provider>
  )
}

export default AppRouter;
