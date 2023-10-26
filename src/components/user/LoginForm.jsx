import React, { useState } from 'react';
import './LoginForm.css';
import NavBar from '/src/components/header/Header.jsx';
import axios from 'axios';

function LoginForm() {
  const URL_ENDPOINT_LOGIN = '';

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  function submitLogin(e) {
    e.preventDefault();
    // axios.post()
  }

  return (
    <>
      <NavBar />
      <div className='login-container'>
        <div className='login-box'>
          <h2>Iniciar Sesión en Ávida 🌳</h2>
          <form onSubmit={(e) => submitLogin(e)}>
            <input
              id='email'
              type='text'
              placeholder='Correo electrónico'
              value={data.email}
              onChange={(e) => handleLogin(e)}
            />
            <input
              id='password'
              type='password'
              placeholder='Contraseña'
              value={data.password}
              onChange={(e) => handleLogin(e)}
            />

            <button type='submit'>Iniciar Sesión</button>
          </form>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
