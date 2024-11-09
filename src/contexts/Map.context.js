import React, { createContext, useState } from "react";

// Create a context with a default value (in this case, an empty object)
const MapContext = createContext({});

// Create a provider component to wrap your app with
const MapContextProvider = ({ children }) => {
  const [markers, setMarkers] = useState([
    {
      description: "My current location",
      latitude: 54.6943,
      longitude: 25.2836,
      iconType: "currentLocation",
    },
    {
      description: "We have available MREs here",
      image: `${process.env.PUBLIC_URL + './assets/food.jpeg'}`,
      latitude: 54.69489908237602,
      longitude: 25.28025837421105,
      iconType: "Resources",
    },
    {
      description: "Have available 1 room with 2 beds, for any victim of invasion",
      image:
          `${process.env.PUBLIC_URL + './assets/room.webp'}`,
      latitude: 54.693490273002475,
      longitude: 25.281228157788654,
      iconType: "ShelterNoCount",
    },
    {
      description: "Bridge bombing recently",
      image:
          `${process.env.PUBLIC_URL + './assets/bomb.jpeg'}`,
      latitude: 54.69100172468465,
      longitude: 25.279849937821062,
      iconType: "Explosion",
    },
    {
      description: "We offer first aid for any survivors on recent bombing",
      image:
          `${process.env.PUBLIC_URL + './assets/aid.jpeg'}`,
      latitude: 54.693700503812785,
      longitude: 25.275498460675088,
      iconType: "Help",
    },
    {
      description: "Enemy troops marching through",
      image:
          `${process.env.PUBLIC_URL + './assets/enemy.jpeg'}`,
      latitude: 54.69970960219711,
      longitude: 25.2833959662436,
      iconType: "Enemy",
    },

    {
      description: "I've been hurt, can't walk, SOS",
      image:
          `${process.env.PUBLIC_URL + './assets/help.jpeg'}`,
      latitude: 54.69955928345105,
      longitude: 25.286470374417043,
      iconType: "Pickup",
    },
  ]);

  const updateMarkers = (newMarkers) => setMarkers(newMarkers);
  ;

  return (
    <MapContext.Provider value={{ markers, updateMarkers }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapContextProvider };
