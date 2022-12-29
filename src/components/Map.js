import React, { useRef, useEffect } from "react";

import "./app.css";
const Map = (props) => {
  const mapRef = useRef();
  const center = {
    lat: 43.6487711,
    lng: -79.7260996,
  };
  const zoom = 10;

  useEffect(() => {
    console.log("kjhdjfhkjhsdnf");
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map`}>
      fhjf
    </div>
  );
};

export default Map;
