import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./Map.css";
import Leaflet from "leaflet";
import { useSelector } from "react-redux";
const Map = () => {
  const {
    lat = 51.505,
    lng = -0.09,
    city = "London",
  } = useSelector((state) => state.ipify.ipDetails);
  const [coord, setCoord] = useState([lat, lng]);

  //   const SetView = () => {
  //     const map = useMap();
  //     map.setView(new Leaflet.LatLng(lat, lng), 13);
  //     return "";
  //   };

  const Fly = () => {
    const map = useMap();
    map.flyTo(new Leaflet.LatLng(coord[0], coord[1]), 13);
    return "";
  };

  useEffect(() => {
    setCoord([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="leaflet-container">
      <MapContainer center={coord} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <SetView /> */}
        <Fly />

        <Marker position={coord}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
