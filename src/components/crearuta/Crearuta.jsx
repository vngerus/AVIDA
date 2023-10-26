import React from 'react';
import mapi from '../../assets/img/mapa.jpeg';
import './crearuta.css';

function Crearuta() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={mapi}
            alt='Descripción de la imagen'
            className='img-fluid crearuta-image' // Clase para la imagen
          />
        </div>
        <div className='col-md-6'>
          <h1 className='crearuta-title mb-3 align-self-start'>
            Crea y recorre rutas
          </h1>
          <p className='crearuta-text text-muted align-self-start'>
            Podrás realizar rutas que ya han sido creadas por otros usuarios o
            dar rienda suelta a tu espíritu explorador y diseñar tus propios
            recorridos únicos. En Ávida, priorizamos la seguridad y autenticidad
            de tus aventuras. Cada camino que se comparte en la aplicación pasa
            por un riguroso proceso de verificación y aprobación antes de estar
            disponible para ti. Esto garantiza que cada ruta que elijas esté
            cuidadosamente revisada y aprobada, proporcionándote la tranquilidad
            de un viaje seguro y auténtico en medio de la biodiversidad de
            Chile.
          </p>
        </div>
      </div>
      <div className='section-divider'></div>
    </div>
  );
}

export default Crearuta;
