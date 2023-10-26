import React from 'react';
import guide from '../../assets/img/ver-guia.png';
import './guia.css';

function Guia() {
  return (
    <div className='guia-container'>
      <div className='guia-image'>
        <div className='custom-space'>
          {/* evaluar espacio de texto izquierda */}
          <h2 className='custom-text-2 display-4'>
            Conoce<br></br> nuestra guía<br></br> de exploración
          </h2>
          <button className='ver-guia-button'>Ver Guía</button>
        </div>
      </div>
      <div className='guia-button'></div>
    </div>
  );
}

export default Guia;
