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
      description: "Provide elevators with sufficient space and accessible buttons at a reachable height.",
      image: `${process.env.PUBLIC_URL + './assets/elevator.jpg'}`,
      latitude: 54.69489908237602,
      longitude: 25.28025837421105,
      iconType: "Wheelchair",
    },
    {
      description: "Provide Braille menus and directories for easy access to information.",
      latitude: 54.693490273002475,
      longitude: 25.281228157788654,
      iconType: "Blind",
    },
    {
      description: "Approaching parking area includes a toll-bar be aware",
      image:
          `${process.env.PUBLIC_URL + './assets/tollbar.jpg'}`,
      latitude: 54.69303610474269,
      longitude: 25.282898588851634,
      iconType: "Alert",
    },
    {
      description: "Provide tablets or digital devices for customers to place orders and read information without needing to speak or hear.",
      image:
          `${process.env.PUBLIC_URL + './assets/ilunch.png'}`,
      latitude: 54.693700503812785,
      longitude: 25.275498460675088,
      iconType: "Deaf",
    },
    {
      description: "The elevator near entrance is temporarily out of service",
      image:
          `${process.env.PUBLIC_URL + './assets/brokenElevator.webp'}`,
      latitude: 54.69970960219711,
      longitude: 25.2833959662436,
      iconType: "Alert",
    },
    {
      description: "Provides ramp for those who cannot use stairs.",
      image:
          `${process.env.PUBLIC_URL + './assets/ramp.jpg'}`,
      latitude: 54.69955928345105,
      longitude: 25.286470374417043,
      iconType: "Wheelchair",
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
