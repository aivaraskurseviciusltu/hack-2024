import React, { useContext, useState, useMemo, useRef, useEffect } from "react";
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
import { useNavigate } from "react-router-dom"; // If using React Router

const TOKEN =
  "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw"; // Set your mapbox token here

const DEFAULT_COORDINATES = { latitude: 54.6943, longitude: 25.2836 }; // Default coordinates

const MapComponent = ({ setMarkerPosition }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const { markers, updateMarkerPosition } = useContext(MapContext);
  const [userLocation, setUserLocation] = useState(DEFAULT_COORDINATES); // Initialize with default coordinates
  const geoControlRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const geoWatchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLocation = { latitude, longitude };
        setUserLocation(newLocation);
        setMarkerPosition(newLocation); // Set initial marker position if not dragged
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 300000,
      }
    );

    return () => {
      navigator.geolocation.clearWatch(geoWatchId);
    };
  }, [setMarkerPosition]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route has changed");
    };

    navigate(handleRouteChange);
  }, [navigate]);

  const pins = useMemo(
    () =>
      markers?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(marker);
          }}
          draggable={marker.iconType === "currentLocation"}
          onDragEnd={(event) =>
            handleDragEnd(event, marker)
          }
        >
          <Pin iconType={marker.iconType} />
        </Marker>
      )),
    [markers]
  );

  const handleDragEnd = (event, marker) => {
    const { lngLat } = event;
    const newLocation = {
      latitude: lngLat.lat,
      longitude: lngLat.lng,
    };

    setMarkerPosition(newLocation);

    if (marker.iconType === "currentLocation") {
      setUserLocation(newLocation);
    }

    if (updateMarkerPosition) {
      updateMarkerPosition(marker.id, newLocation);
    }
  };

  return (
    <Map
      style={{ height: "80vh", borderRadius: "10px" }}
      initialViewState={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        zoom: 15,
        bearing: 0,
        pitch: 0,
      }}
      onLoad={() => geoControlRef.current?.trigger()}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={TOKEN}
    >
      <GeolocateControl index="geolocateControl" position="top-left" ref={geoControlRef} />
      <NavigationControl position="top-left" />
      <ScaleControl />

      {userLocation && (
        <Marker
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
          anchor="bottom"
          draggable
          onDragEnd={(event) => handleDragEnd(event, { iconType: "currentLocation" })}
          style={{ zIndex: 10 }}
        >
          <Pin iconType="currentLocation" />
        </Marker>
      )}

      {pins}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <Typography variant="p" component="p" color="black">
            {popupInfo.description}
          </Typography>
          {popupInfo.image && <img width="100%" src={popupInfo.image} />}
        </Popup>
      )}
    </Map>
  );
};

export default MapComponent;
