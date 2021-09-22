import React from 'react';

const isAuthContext = React.createContext({
  user: '',
  isAuth: false
});

export default isAuthContext;