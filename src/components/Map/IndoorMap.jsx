import React, { useEffect, useRef } from 'react';

const IndoorMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      // Create a new Google Map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: YOUR_LAT, lng: YOUR_LNG }, // Replace with your location
        zoom: 17,
        mapTypeControl: false,
      });

      // Initialize MapsIndoors
      const mapsIndoors = new window.mapsindoors.MapsIndoors({
        map,
        apiKey: 'pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw', // Replace with your MapsIndoors API Key
      });

      mapsIndoors.setSolution('YOUR_SOLUTION_ID'); // Replace with your MapsIndoors Solution ID
    };

    // Load the map after the SDKs are available
    if (window.google && window.mapsindoors) {
      initMap();
    } else {
      console.error('Google Maps or MapsIndoors SDK is not loaded');
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default IndoorMap;