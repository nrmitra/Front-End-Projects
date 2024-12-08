import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";


const App = () => {
  const handleCreate = (e) => {
    console.log("Territory Created: ", e.layer.toGeoJSON());
  };

  const handleEdit = (e) => {
    console.log("Territory Edited: ", e.layers.getLayers());
  };

  const handleDelete = (e) => {
    console.log("Territory Deleted: ", e.layers.getLayers());
  };

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[51.505, -0.09]} // London Coordinates
        zoom={13}
        style={{ height: "100%", width: "45%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreate}
            onEdited={handleEdit}
            onDeleted={handleDelete}
            draw={{
              rectangle: true,
              polyline: false,
              circle: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default App;
