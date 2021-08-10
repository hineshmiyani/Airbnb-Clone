import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { useState } from "react";

function Map({ searchData }) {
  //Transform the search data object into the
  //{latitude: result.lat,longitude: result.long}
  //Object

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchData.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  // The latitude and longitude of the center of locations coordinates

  const center = getCenter(coordinates);

  //   console.table(center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/hineshmiyani/cks5ky05e0b6r17pez9yj34wa"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport} //sprade operator
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchData.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => {
                setSelectedLocation(result);
                console.log("From Marker", result.long, result.title);
              }}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              tipSize={8}
              anchor="top"
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
              {console.log("From popup", result.long, result.title)}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
