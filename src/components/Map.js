import React, { useRef, useEffect } from "react";

import "./app.css";
const Map = (props) => {
  const mapRef = useRef();
  const center = {
    lat: 43.6875475,
    lng: -79.8429575,
  };
  const zoom = 10;

  useEffect(() => {
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
