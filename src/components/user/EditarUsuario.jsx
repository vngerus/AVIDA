import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarUsuario() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    username: '',
    password: '',
  });

  const onInputChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const submitModificar = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8005/api/usuarios/modificar/${id}`,
      usuario
    );
    navigate('/usuarios');
  };

  useEffect(() => {
    async function loadUserData() {
      try {
        const result = await axios.get(
          `http://localhost:8005/api/usuarios/ver/${id}`
        );
        const userData = result.data;

        // Quita el símbolo "@" del username
        userData.username = userData.username.slice(1);
        setUsuario(userData);
      } catch (error) {
        console.error('Error al cargar datos del usuario', error);
      }
    }

    loadUserData();
  }, [id]);

  return (
    <div className='formregis-background'>
      <div className='registration-form'>
        <h1>Editar usuario 🌳</h1> {/* Encabezado dentro del formulario */}
        <form onSubmit={(e) => submitModificar(e)}>
          <div className='form-group'>
            <div className='form-row'>
              <div className='col'>
                <input
                  id='nombre'
                  name='nombre'
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  value={usuario.nombre}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className='col'>
                <input
                  id='apellido'
                  name='apellido'
                  type='text'
                  className='form-control'
                  placeholder='Apellido'
                  value={usuario.apellido}
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
            </div>
          </div>
          <div className='form-group'>
            <input
              id='email'
              name='email'
              type='email'
              className='form-control'
              placeholder='Correo Electrónico'
              value={usuario.email}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='basic-addon1'>
              @
            </span>
            <input
              id='username'
              name='username'
              type='text'
              className='form-control'
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
              value={usuario.username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              id='password'
              name='password'
              type='password'
              className='form-control'
              placeholder='Contraseña'
              value={usuario.password}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Editar usuario
          </button>
        </form>
      </div>
    </div>
  );
}
