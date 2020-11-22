import React from "react";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h3>Location:</h3>
      <p>
        <strong>{info.title}</strong>
      </p>
    </div>
  );
};

export default LocationInfoBox;
