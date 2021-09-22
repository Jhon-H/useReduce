import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../customHooks/useForm';
import users from '../assets/users';

const Registro = () => {
  const [form, handleInputChange, reset] = useForm({ user: '', password: '', name: '' });
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (isExists(form.user)) {
      alert("USUARIO YA EXISTE")
    }
    else {
      alert("registrado correctamente");
      users.push(form);
    }

    reset();
  }

  const isExists = newUser => {
    return users.some(user => user.user === newUser);
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
      <h1> Registrandose </h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre completo"
          autoComplete="off"
          required
        />
        <br />
        <input
          type="email"
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
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>

      <br />
      <Link to="/auth"> volver </Link>
    </div>
  )
}

export default Registro;
