import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import WildfireMarker from "./EventMarkers/WildfireMarker";
import LocationInfoBox from "./LocationInfoBox";
import IcebergMarker from "./EventMarkers/SevereStormMarker";
import SevereStormMarker from "./EventMarkers/SevereStormMarker";

const api_key = process.env.REACT_APP_API_KEY;

const NATURAL_EVENT_WILDFIRE = 8;
const NATURAL_EVENT_STORM = 10;
const NATURAL_EVENT_ICEBERG = 15;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <WildfireMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              description: ev.description,
            })
          }
        />
      );
    } else if (ev.categories[0].id === NATURAL_EVENT_STORM) {
      return (
        <SevereStormMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              description: ev.description,
            })
          }
        />
      );
    } else if (ev.categories[0].id === NATURAL_EVENT_ICEBERG) {
      return (
        <IcebergMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              description: ev.description,
            })
          }
        />
      );
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ api_key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 4,
};

export default Map;
