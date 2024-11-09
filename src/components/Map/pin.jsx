import * as React from "react";

const wheelchairIcon = process.env.PUBLIC_URL + "/icons/wheelchair.svg"
const alertIcon = process.env.PUBLIC_URL + "/icons/alert.svg"
const blindIcon = process.env.PUBLIC_URL + "/icons/blind.svg"
const deafIcon = process.env.PUBLIC_URL + "/icons/deaf.svg"

function Pin({ size = 40, iconType }) {
  const getIcon = () => {
    switch (iconType) {
      case "Wheelchair":
        return <img src={wheelchairIcon} width={size} alt="Wheelchair"/>
      case "Deaf":
        return <img src={deafIcon} width={size} alt="Deaf"/>
      case "Blind":
        return <img src={blindIcon} width={size} alt="Blind" />
      case "Alert":
        return <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 0, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}><img src={alertIcon} width={size} alt="Alert"/></div>
          default:
          return
          }
          };
          return getIcon();
          }

          export default React.memo(Pin);
