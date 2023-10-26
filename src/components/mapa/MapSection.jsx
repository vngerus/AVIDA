import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../mapa/mapsection.css';
import aguramon from '../mapa/imgruta/Aguasramon.webp';
import ccarpa from '../mapa/imgruta/CerroCarpa.jpg';
import cpochoco from '../mapa/imgruta/CerroPochoco.jpg';
import cprovincia from '../mapa/imgruta/Cerroprovincia.jpg';
import croble from '../mapa/imgruta/Cerroroble.jpg';
import cmanque from '../mapa/imgruta/Manquehue.jpg';
import parquemetro from '../mapa/imgruta/Parquemetro.webp';
import quebra from '../mapa/imgruta/Quebrada.jpg';
import azul from '../mapa/imgruta/iconoa.png';
import blanco from '../mapa/imgruta/iconob.png';

const defaultIcon = new L.Icon({
  iconUrl: blanco,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const greenIcon = new L.Icon({
  iconUrl: azul,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapSection = () => {
  const santiagoCoordinates = [-33.44981017365853, -70.66357936512267];

  const lugaresPopulares = [
    {
      nombre: 'Cerro Manquhue',
      coordenadas: [-33.34997201571539, -70.58247975345017],
      imagen: cmanque,
    },
    {
      nombre: 'Cerro El Roble',
      coordenadas: [-32.95393388243295, -71.01740141564244],
      imagen: croble,
    },
    {
      nombre: 'Cerro Pochoco',
      coordenadas: [-33.3489092311365, -70.44974899513984],
      imagen: cpochoco,
    },
    {
      nombre: 'Parque Natural Aguas de Ramón',
      coordenadas: [-33.433284100235234, -70.51914317742865],
      imagen: aguramon,
    },
    {
      nombre: 'Cerro Carpa',
      coordenadas: [-33.254173658247254, -70.46782077680382],
      imagen: ccarpa,
    },
    {
      nombre: 'Cerro Provincia',
      coordenadas: [-33.420721491461066, -70.43490611059441],
      imagen: cprovincia,
    },
    {
      nombre: 'Parque Metropolitano',
      coordenadas: [-33.42222072408865, -70.63137064819999],
      imagen: parquemetro,
    },
    {
      nombre: 'Parque Quebrada de Macul',
      coordenadas: [-33.51597956067167, -70.55349685145033],
      imagen: quebra,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const scrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollDown = () => {
    if (startIndex < lugaresPopulares.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleMarkerClick = (imagen) => {
    const lugar = lugaresPopulares.find((lugar) => lugar.imagen === imagen);
    if (lugar) {
      setSelectedImage(imagen);
      setSelectedCoordinates(lugar.coordenadas);
    }
  };

  return (
    <div className='map-section'>
      <div className='imagen-filtro'>
        <button onClick={scrollUp} className='navigation-button'>
          ▲
        </button>
        {lugaresPopulares
          .slice(startIndex, startIndex + 5)
          .map((lugar, index) => (
            <img
              key={index}
              src={lugar.imagen}
              alt={lugar.nombre}
              className={selectedImage === lugar.imagen ? 'selected' : ''}
              onClick={() => handleMarkerClick(lugar.imagen)}
            />
          ))}
        <button onClick={scrollDown} className='navigation-button'>
          ▼
        </button>
      </div>
      <MapContainer
        center={selectedCoordinates || santiagoCoordinates}
        zoom={11}
        className='mapae'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />

        {lugaresPopulares.map((lugar, index) => (
          <Marker
            key={index}
            position={lugar.coordenadas}
            onClick={() => handleMarkerClick(lugar.imagen)}
            icon={selectedImage === lugar.imagen ? greenIcon : defaultIcon}
          >
            <Popup>{lugar.nombre}</Popup>
          </Marker>
        ))}

        {selectedImage && (
          <Marker
            position={selectedCoordinates || santiagoCoordinates}
            icon={greenIcon}
          >
            <Popup>
              <img
                src={selectedImage}
                alt='Imagen Seleccionada'
                className='selected-image'
              />
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapSection;
