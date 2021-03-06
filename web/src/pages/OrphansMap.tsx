import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerImg from '../assets/map-marker.svg'

import '../styles/pages/orphansMap.css'
import mapIcon from '../util/mapIcon'

import api from '../services/api'

interface Orphanage {
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphansMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(()=> {
        api.get('orphanages').then(response => {
            setOrphanages(response.data)
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Hapy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>


                <footer>
                    <strong>Camaçari</strong>
                    <span>Bahia</span>
                </footer>
            </aside>
                
            <Map 
                center={[-12.7039064,-38.2982128]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

            {
                orphanages.map(orphanage => {
                    return(
                        <Marker key={orphanage.id}
                            icon= {mapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                        >

                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}> 
                                <FiArrowRight size={20} color="#FFF" />       
                            </Link>
                        </Popup>
                        
                        </Marker>
                    )
                })
            }

            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphansMap