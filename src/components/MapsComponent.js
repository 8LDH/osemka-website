import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MapsComponent() {
  return (
    <div className="map-embed">
      <iframe
        title="Troop Location"
        width="600"
        height="450"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAwwwOpklIBR1l0nuLTjON1W0sjWZKrncE&q=Troop+Location`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MapsComponent;
