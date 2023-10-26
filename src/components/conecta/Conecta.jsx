import React from 'react';
import apphone from '../../assets/img/app.png';
import './conecta.css';

const Conecta = () => {
  return (
    <div className='container container-espacio'>
      <div className='divider-center'>
        <div className='section-verde'></div>
      </div>
      <div className='row'>
        <div className='col-md-6 flex-column justify-content-center'>
          <h1 className='conecta-title mb-3 align-self-start'>
            Conecta con la naturaleza, conéctate con la Comunidad
          </h1>
          <p className='conecta-text text-muted align-self-start'>
            Bienvenido a nuestra plataforma dedicada a la biodiversidad
            terrestre de Chile. Te invitamos a un emocionante viaje de
            exploración, aprendizaje y conservación de la naturaleza.
          </p>
          <p className='conecta-text text-muted align-self-start'>
            Nuestra aplicación te permite descubrir la asombrosa biodiversidad
            que te rodea. Captura fotos de las especies que encuentres en tus
            rutas por parques, humedales y ecosistemas. Cada avistamiento cuenta
            para la ciencia y la conservación. También aprende sobre las
            especies locales con nuestras guías de identificación y pon a prueba
            tus conocimientos con cuestionarios interactivos. Únete a una
            comunidad apasionada por la naturaleza, comparte tus experiencias y
            contribuye a proyectos de investigación.
          </p>
        </div>
        <div className='col-md-6'>
          <img
            src={apphone}
            alt='Descripción de la imagen'
            className='img-fluid conecta-image'
          />
        </div>
        <button className='style-button'>Descargar</button>
      </div>
      <div className='divider-center'>
        <div className='section-verde'></div>
      </div>
    </div>
  );
};

export default Conecta;
