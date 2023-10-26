import React, { useState } from 'react';
import axios from 'axios';
import './regisform.css';
import { useNavigate } from 'react-router-dom';

function RegisForm() {
  const URL_API_REGISTER = 'http://localhost:8005/api/usuarios/nuevo';

  let navigate = useNavigate();

  const [data, setData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    password: '',
  });

  function handleRegistro(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submitForm(e) {
    e.preventDefault();
    axios
      .post(URL_API_REGISTER, {
        nombre: data.nombre,
        apellido: data.apellido,
        username: '@' + data.username,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
      });
    setTimeout(() => navigate('/usuarios'), 3000);
  }

  return (
    <div className='formregis-background'>
      <div className='registration-form'>
        <h1>Regístrate en Ávida 🌳</h1> {/* Encabezado dentro del formulario */}
        <form onSubmit={(e) => submitForm(e)}>
          <div className='form-group'>
            <div className='form-row'>
              <div className='col'>
                <input
                  id='nombre'
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  value={data.nombre}
                  onChange={(e) => handleRegistro(e)}
                  required
                />
              </div>
              <div className='col'>
                <input
                  id='apellido'
                  type='text'
                  className='form-control'
                  placeholder='Apellido'
                  value={data.apellido}
                  onChange={(e) => handleRegistro(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <input
              id='email'
              type='email'
              className='form-control'
              placeholder='Correo Electrónico'
              value={data.email}
              onChange={(e) => handleRegistro(e)}
              required
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              @
            </span>
            <input
              id='username'
              type='text'
              className='form-control'
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
              onChange={(e) => handleRegistro(e)}
            />
          </div>
          <div className='form-group'>
            <input
              id='password'
              type='password'
              className='form-control'
              placeholder='Contraseña'
              value={data.password}
              onChange={(e) => handleRegistro(e)}
              required
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisForm;
