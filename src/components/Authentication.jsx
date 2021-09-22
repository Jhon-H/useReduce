import React from 'react'
import { Link } from 'react-router-dom';

const Authentication = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'navy',
      height: '100vh'
    }}>
      <Link to="/auth/login"> Ya tienes cuenta? Ingresar </Link>
      <br />
      <Link to="/auth/register"> Crear cuenta </Link>
    </div>
  )
}

export default Authentication;