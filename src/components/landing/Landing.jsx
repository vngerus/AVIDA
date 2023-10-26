import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Header from '../header/Header';
import Home from '../home/Home';
import Comunidad from '../comunidad/Comunidad';
import Conecta from '../conecta/Conecta';
import Crearuta from '../crearuta/Crearuta';
import Rutaje from '../rutaje/Rutaje';
import Guia from '../guia/Guia';
import Tienda from '../tienda/Tienda';
import Footer from '../footer/Footer';

function Landing() {
  return (
    <div className='app-container'>
      <Header rol={'usuario'} />
      <Home />
      <Conecta />
      <Crearuta />
      <Rutaje />
      <Guia />
      <Comunidad />
      <Tienda />
      <Footer />
    </div>
  );
}

export default Landing;
