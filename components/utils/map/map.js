import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";

export default function Map() {
  const defaultProps = {
    center: {
      lat: 6.4477227,
      lng: 3.4043464,
      greatPlaceCoords: { lat: 6.4477227, lng: 3.4043464 },
    },
    zoom: 17,
  };

  const handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };

  const Locator = ({ icon }) => <div>{icon}</div>;

  return (
    <>
      <GoogleMapReact
        style={{ height: "30rem", width: "100%" }}
        bootstrapURLKeys={{
          key: "AIzaSyBjRQMhN-3q-BF-5c2Yzfq5XwEDsqLOBOQ",
          libraries: ["places"],
        }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals={true}
        options={{
          fullscreenControl: false,
          mapTypeId: "roadmap",
        }}
      >
        <Locator
          icon={
            <Icon
              icon="material-symbols:location-on"
              color="#de1e12"
              width="36"
              height="36"
            />
          }
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
    </>
  );
}
