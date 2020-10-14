import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../images/map-marker.svg'
import happyMapIcon from '../utils/happyMapIcon'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
        
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Osasco</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

      <Map
        center={[-23.535484,-46.7890726]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
        <Marker 
          icon={happyMapIcon}
          position={[-23.535484,-46.7890726]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap