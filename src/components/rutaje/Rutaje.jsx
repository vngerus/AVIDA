import React from 'react';
import './rutaje.css';
import ruta1 from '../../assets/img//ruta1.png';
import ruta2 from '../../assets/img//ruta2.png';
import ruta3 from '../../assets/img//ruta3.png';

function Rutaje() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img
            src={ruta1}
            alt='Descripción de la imagen 1'
            className='img-fluid'
          />
        </div>
        <div className='col-md-4'>
          <img
            src={ruta2}
            alt='Descripción de la imagen 2'
            className='img-fluid'
          />
        </div>
        <div className='col-md-4'>
          <img
            src={ruta3}
            alt='Descripción de la imagen 3'
            className='img-fluid'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <button className='style-button button-space'>Ver rutas</button>
        </div>
      </div>
      <div className='section-divider'></div>
    </div>
  );
}

export default Rutaje;
