import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import isAuthContext from '../context/isAuthContext'

const Navbar = () => {
  
  const authContex = useContext(isAuthContext);
  console.log(authContex);
  
  const handleLogout = () => {
    authContex.handleChangeIsAuth(false, '');
  }


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" style={{ color: 'white' }}> {authContex.user} </li>
        <li class="nav-item">
          <button class="btn btn-outline-success" type="submit" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;