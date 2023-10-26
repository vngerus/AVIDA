import React from 'react';
import './Comunidad.css';

import anima1 from '../../assets/img/canima1.png';
import anima2 from '../../assets/img/canima2.png';
import anima3 from '../../assets/img/canima3.png';
import user1 from '../../assets/img/cuser1.png';
import user2 from '../../assets/img/cuser2.png';
import user3 from '../../assets/img/cuser3.png';

function Comunidad() {
  return (
    <div className='comunidad-container'>
      <div className='divider-center'>
        <div className='section-verde'></div>
      </div>
      <h2 className='tamaño-h2'>Únete a la comunidad</h2>
      <div className='animal-images'>
        <div className='animal'>
          <div className='contenedor-img'>
            <img src={anima1} alt='Animal 1' />
          </div>

          <div className='contenedor-contenido-card'>
            <div className='contenedor-user'>
              <img src={user1} alt='Avatar 1' />
            </div>
            <div className='imformacion'>
              <h3>Maria L.</h3>
              <p>Parque Bustamante</p>
            </div>
          </div>

          <div className='custom-info-p'>
            <p>
              ¡Qué increíble experiencia! Capturé una foto de un cururo en el
              parque cerca de mi casa y la subí a la aplicación. Me emocionó ver
              cuántas personas se unieron para identificarlo. ¡Estamos
              contribuyendo juntos a la conservación de la fauna en Chile!
            </p>
          </div>
        </div>

        <div className='animal'>
          <div className='contenedor-img'>
            <img src={anima2} alt='Animal 2' />
          </div>

          <div className='contenedor-contenido-card'>
            <div className='contenedor-user'>
              <img src={user2} alt='Avatar 2' />
            </div>
            <div className='imformacion'>
              <h3>Juan C.</h3>
              <p>Quinta Normal</p>
            </div>
          </div>

          <div className='custom-info-p'>
            <p>
              Nunca antes había notado la diversidad de plantas en mi región.
              Usando la aplicación, capturé una foto de una ortiga chilena y la
              compartí. Fue emocionante aprender más sobre la flora chilena y
              saber que mi contribución cuenta para su conservación.
            </p>
          </div>
        </div>

        <div className='animal'>
          <div className='contenedor-img'>
            <img src={anima3} alt='Animal 3' />
          </div>

          <div className='contenedor-contenido-card'>
            <div className='contenedor-user'>
              <img src={user3} alt='Avatar 3' />
            </div>
            <div className='imformacion'>
              <h3>Carlos E.</h3>
              <p>Templo Bahai</p>
            </div>
          </div>

          <div className='custom-info-p'>
            <p>
              Soy un amante de las aves y esta aplicación es un tesoro.
              Fotografié un cachudito en el templo Bahai y rápidamente lo
              identificamos. Ahora, puedo aprender sobre las aves de Chile
              mientras contribuyo a la investigación científica. ¡Muy agradecido
              por esta oportunidad!
            </p>
          </div>
        </div>
      </div>
      <button className='style-button'>Comunidad</button>
    </div>
  );
}

export default Comunidad;
