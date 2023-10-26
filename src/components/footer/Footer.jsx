import React from 'react';
import './footer.css';
import logo from './footerimg/Avida.png';
import imgemail from './footerimg/email.png';
import imginsta from './footerimg/instagram.png';
import imgface from './footerimg/facebook.png';

const Footer = () => {
  return (
    <div className='container-footer'>
      <footer className=' row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top ajustes'>
        <div className='col mb-3'>
          <img src={logo} alt='Logo-Ávida' className='logo' />
        </div>
        <div className='col mb-3'></div>
        <div className='col mb-3'>
          <ul className='nav flex-column ajuste-footer'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary '>
                Inicio
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Mapa
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Comunidad
              </a>
            </li>
          </ul>
        </div>

        <div className='col mb-3'>
          <ul className='nav flex-column ajuste-footer'>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Guía
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Tienda
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a href='#' className='nav-link p-0 text-body-secondary'>
                Mi cuenta
              </a>
            </li>
          </ul>
        </div>

        <div className='col mb-3 ajustes-iconos'>
          <img src={imgface} alt='Logo-Facebook' className='icono_footer' />
          <img src={imginsta} alt='Logo-Instagram' className='icono_footer' />
          <img src={imgemail} alt='Logo-email' className='icono_footer' />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
