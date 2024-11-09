import React, { useContext } from "react";
import { useState, useMemo } from "react";
import { Typography } from "@mui/material";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pin from "./pin";
import { MapContext } from "../../contexts/Map.context";

const TOKEN =
  "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw"; // Set your mapbox token here

const MapComponent = ({ setMarkerPosition }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const { markers } = useContext(MapContext);

  const pins = useMemo(
    () =>
      markers?.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(marker);
          }}
          draggable={marker.iconType === "currentLocation"}
          onDragEnd={(event) =>
            setMarkerPosition({
              longitude: event.lngLat.lng,
              latitude: event.lngLat.lat,
            })
          }
        >
          <Pin iconType={marker.iconType} />
        </Marker>
      )),
    [markers]
  );

  return (
    <Map
      initialViewState={{
        latitude: 54.6943,
        longitude: 25.2836,
        zoom: 15,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken={TOKEN}
    >
      <GeolocateControl position="top-left" />

      <NavigationControl position="top-left" />
      <ScaleControl />

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
