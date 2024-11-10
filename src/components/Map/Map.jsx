import React, { useContext, useEffect, useState, useMemo, useRef } from "react";
import { Typography } from "@mui/material";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pin from "./pin";
import { MapContext } from "../../contexts/Map.context";
import { useNavigate } from "react-router-dom";

const TOKEN =
  "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw"; // Set your mapbox token here

const MapComponent = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const { markers } = useContext(MapContext);
  const [userLocation, setUserLocation] = useState(null); // State to hold user coordinates
  const geoControlRef = useRef();
  const navigate = useNavigate(); // For navigation if using React Router

  const geoWatchRef = useRef(null); // Store the geolocation watcher ID

  // Function to calculate distance between two lat/lng coordinates
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  // Function to handle geolocation and user position updates
  const updateUserLocation = () => {
    if (navigator.geolocation) {
      geoWatchRef.current = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });

          // Check distance to each marker
          markers.forEach((marker) => {
            const distance = calculateDistance(
              latitude,
              longitude,
              marker.latitude,
              marker.longitude
            );

            // If the user is close to the marker (e.g., within 0.5 km), alert
            if (marker.iconType === "Alert" && distance < 0.05) {
              console.log(`You are close to marker`, marker);
              speakDescription(marker.description);
            }
          });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }
  };

  useEffect(() => {
    updateUserLocation(); // Start tracking user location when component mounts

    // Cleanup geolocation watcher when component unmounts or route changes
    return () => {
      if (geoWatchRef.current) {
        navigator.geolocation.clearWatch(geoWatchRef.current);
        geoWatchRef.current = null; // Reset geoWatchRef
      }
    };
  }, []); // This will run once on mount and clean up on unmount

  useEffect(() => {
    // Listen for route changes and clear the geolocation watcher
    const handleRouteChange = () => {
      if (geoWatchRef.current) {
        navigator.geolocation.clearWatch(geoWatchRef.current);
        geoWatchRef.current = null; // Reset geoWatchRef
      }
    };

    // Add event listener for route changes (if applicable)
    navigate(handleRouteChange); // Optional: add logic when page changes

    // Cleanup geolocation watcher on route change or unmount
    return () => {
      if (geoWatchRef.current) {
        navigator.geolocation.clearWatch(geoWatchRef.current);
        geoWatchRef.current = null;
      }
    };
  }, [navigate]);

  const pins = useMemo(
    () =>
      markers?.map((marker, index) => (
        <Marker
          key={`${marker}-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(marker);
          }}
        >
          <Pin iconType={marker.iconType} />
        </Marker>
      )),
    [markers]
  );

  const speakDescription = (description) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(description);
      utterance.lang = "en-US";
      utterance.rate = 1;   // Normal speed
      utterance.pitch = 1;  // Normal pitch
      utterance.volume = 1; // Full volume
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
      <Map
        initialViewState={{
          latitude: 54.6943,
          longitude: 25.2836,
          zoom: 15,
          bearing: 0,
          pitch: 0,
        }}
        onLoad={() => geoControlRef.current?.trigger()}
        mapStyle="mapbox://styles/mapbox/light-v10"
        style={{borderRadius: "10px"}}
        mapboxAccessToken={TOKEN}
      >
        <GeolocateControl index="geolocateControl" position="top-left" ref={geoControlRef}/>
        <NavigationControl position="top-left"/>
        <ScaleControl/>
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            style={{maxHeight: "100px", display: "flex", flexDirection: "column"}}
          >
            <Typography variant="h5" color="black">
              {popupInfo.description}
            </Typography>
            {popupInfo.image && <img width="100%" style={{maxHeight: "150px"}} src={popupInfo.image}/>}
          </Popup>
        )}
      </Map>
  );
};

export default MapComponent;
