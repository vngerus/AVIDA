import React from 'react';
import '../comunosotros/comunosotros.css';

import angel from '../comunosotros/comuimg/angel.png';
import poli from '../comunosotros/comuimg/poli.png';
import mati from '../comunosotros/comuimg/mati.png';
import roen from '../comunosotros/comuimg/roen.png';
import kevin from '../comunosotros/comuimg/kevin.png';

export const Comunosotros = () => {
  return (
    <section class='portafolio'>
      <article class='perfiles'>
        <div class='perfil-sup'>
          <figure>
            <img src={kevin} alt='perfil' />

            <figcaption>
              <h3>Kevin Peña </h3>
              <p>Developer</p>
            </figcaption>
          </figure>

          <figure>
            <img src={poli} alt='perfil' />

            <figcaption>
              <h3>Paulette Doll</h3>
              <p>Developer</p>
            </figcaption>
          </figure>

          <figure>
            <img src={mati} alt='perfil' />

            <figcaption>
              <h3>Matías Quevedo</h3>
              <p>Developer</p>
            </figcaption>
          </figure>
        </div>

        <div class='perfil-inf'>
          <figure>
            <img src={angel} alt='perfil' />

            <figcaption>
              <h3>Ángel Smith</h3>
              <p>Product Owner</p>
            </figcaption>
          </figure>

          <figure>
            <img src={roen} alt='perfil' />

            <figcaption>
              <h3>Rosa Enco Peréz</h3>
              <p>Scrum Master</p>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Comunosotros;
