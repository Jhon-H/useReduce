import React, { useReducer, useState, useContext } from 'react';
import { authReducer, initialState } from '../reducers/authReducers';
import { login, logout } from '../actions/authAction';
import { Link, Redirect } from 'react-router-dom';
import useForm from '../customHooks/useForm';
import users from '../assets/users';
import isAuthContext from '../context/isAuthContext';

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [form, handleInputChange, reset] = useForm({ 'user': '', 'password': '' });
  const [isShow, setIsShow] = useState(false);
  const authContex = useContext(isAuthContext);

  const handleSubmit = event => {
    event.preventDefault();

    if(isExists(form.user, form.password)) {
      authContex.handleChangeIsAuth(true, form.user);
    } else {
      alert("Usuario o contraseña incorrectos");
    }

    reset();
  }

  const isExists = (user_, password_) => {
    return users.some(user => user.user === user_ && user.password === password_);
  }
 
  const handleChange = event => {
    handleInputChange(event.target);
  }

  const handleChangeChecked = e => {
    if (e.checked != isShow)
      setIsShow(!isShow)
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          name="user"
          value={form.user}
          onChange={handleChange}
          placeholder="usuario"
          autoComplete="off"
          required
        />
        <br />
        <input
          type={isShow ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="contraseña"
          autoComplete="off"
          required
        />
        <label> Show
          <input
            type="checkbox"
            onChange={handleChangeChecked}
          />
        </label>
        <br/>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => dispatch(login('1234', 'Silvia Garcia'))}
        >
          Login
        </button>
      </form>
      <br />
      <Link to="/auth"> volver </Link>
    </div>
  )
}