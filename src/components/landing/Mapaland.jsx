import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import MapSection from '../mapa/MapSection';
import Mapacrea from '../mapa/Mapacrea';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Mapaland() {
  return (
    <div className='app-container'>
      <Header />
      <Mapacrea />
      <MapSection />
      <Footer />
    </div>
  );
}

export default Mapaland;
