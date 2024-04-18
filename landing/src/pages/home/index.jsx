import React from "react";
import maplibregl from "maplibre-gl";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { sendRequest } from "../../request-method/request";
const Home = () => {
  const getRedZones = async () => {
    const res = await sendRequest("GET", "/api/get_dangerzones");
  };

  return (
    <div className="map-wrap">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 35.49548,
          latitude: 33.88863,
          zoom: 11,
        }}
        style={{ width: "100%", height: " calc(50vh)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=qNYCGSlfvbI5nEODpHvQ"
      >
        <NavigationControl position="top-left" />

        <div className="flex col gap">
          <Marker
            latitude={35.49548}
            longitude={35.49548}
            color="transparent"
            style={{
              boxShadow: "5px  10px 10px 50px rgba(255,0,0,0.5) ",
              borderRadius: "50%",
            }}
          />
          <Marker
            latitude={35.49548}
            longitude={35.49548}
            children={"danger"}
            style={{ color: "white", fontSize: "18px" }}
          />
        </div>
      </Map>
    </div>
  );
};

export default Home;
