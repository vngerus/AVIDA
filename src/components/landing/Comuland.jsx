import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Header from '../header/Header';
import Comuhome from '../comunidad/comuhome/Comuhome';
import Comucone from '../comunidad/comucone/Comucone';
import Comuruta from '../comunidad/comuruta/Comuruta';
import Comunos from '../comunidad/comunos/Comunos';
import Comunosotros from '../comunidad/comunosotros/Comunosotros';
import Footer from '../footer/Footer';

function Comuland() {
  return (
    <div className='app-container'>
      <Header />
      <Comuhome />
      <Comucone />
      <Comuruta />
      <Comunos />
      <Comunosotros />
      <Footer />
    </div>
  );
}

export default Comuland;
