import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Usuarios() {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resultado = await axios.get(
      'http://localhost:8005/api/usuarios/listar'
    );
    setUsuario(resultado.data);
  };

  const borrarUsuario = async (id) => {
    await axios.delete(`http://localhost:8005/api/usuarios/borrar/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Usuarios registrados en Ávida</h1>
      <table className='table border shadow'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Correo</th>
            <th scope='col'>Username</th>
            <th scope='col'>Contraseña</th>
            <th scope='col'>Fecha de Registro</th>
            <th scope='col'>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((usuario, index) => (
            <tr key={usuario.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
              <td>{usuario.fechaRegistro}</td>
              <td>
                <Link
                  to={`/edituser/${usuario.id}`}
                  className='btn btn-success'
                >
                  Modificar
                </Link>{' '}
                <button
                  className='btn btn-danger'
                  onClick={() => borrarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
