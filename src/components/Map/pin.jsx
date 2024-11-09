import * as React from "react";

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
          return
          }
          };
          return getIcon();
          }

          export default React.memo(Pin);
