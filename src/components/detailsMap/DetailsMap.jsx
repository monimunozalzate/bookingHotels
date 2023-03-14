import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styles from "./DetailsMap.module.css"

const DetailsMap = () => {

    const position = [51.505, -0.09]
    return (
        <div className={styles.mapContainer}>
        <MapContainer style={{width: "100%", height: "100%", borderRadius: "0.625rem"}}  center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}

export default DetailsMap