import * as React from "react";
import Enemy  from "./icons/Enemy.svg";
import Explosion  from "./icons/Explosion.svg";
import Help  from "./icons/Help.svg";
import Pickup from "./icons/Pickup.svg";
import Resources from "./icons/Resources.svg";
import ShelterNoCount  from "./icons/ShelterNoCount.svg";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
};

const CURRENT_LOCATION = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

function Pin1({ size = 60, iconType }) {
  const getIcon = () => {
    switch (iconType) {
      case "Enemy":
        return <img src={Enemy} width={size} alt="Enemy"/>
      case "Explosion": 
        return <img src={Explosion} width={size} alt="Explosion"/>
      case "Help":
        return <img src={Help} width={size} alt="Help" />
      case "Pickup":
        return <img src={Pickup} width={size} alt="Pickup" />
      case "Resources":
        return <img src={Resources} width={size} alt="Resources" />
      case "ShelterNoCount":
        return <img src={ShelterNoCount} width={size} alt="ShelterNoCount" />;
      default:
        return (
          <svg height={20} viewBox="0 0 24 24" style={pinStyle}>
            <path d={CURRENT_LOCATION} />
          </svg>
        );
    }
  };
  return getIcon();
}

export default React.memo(Pin1);
