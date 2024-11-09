import * as React from "react";

const pinStyle = {
  cursor: "pointer",
  fill: "#d00",
  stroke: "none",
};

const CURRENT_LOCATION = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

function Pin({ size = 40, iconType }) {
  const getIcon = () => {
    switch (iconType) {
      case "Wheelchair":
        return <img src="/icons/wheelchair.svg" width={size} alt="Wheelchair"/>
      case "Deaf":
        return <img src="/icons/deaf.svg" width={size} alt="Deaf"/>
      case "Blind":
        return <img src="/icons/blind.svg" width={size} alt="Blind" />
      case "Alert":
        return <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}><img src="/icons/alert.svg" width={size} alt="Alert"/></div>
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

export default React.memo(Pin);
