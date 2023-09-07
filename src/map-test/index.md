## Adding Custom Marker Icons to react-leaflet Maps


We’ll use the Icon class from leaflet to create and render a custom icon as a position marker on the map. Custom icons can be used to represent a specific location on a map in PNG, JPG, SVG, or any other image format.

For this tutorial, we downloaded a computer solid svg from fontawesome and store it in a images folder created in the public folder.

Update your Map.jsx file with the code below:

```jsx
import React from "react";
import { 
    MapContainer,
    Marker,
    Popup,
    TileLayer
} from "react-leaflet";
import { Icon } from "leaflet";
 
export const Map = () => {
  const position = [8.1386, 5.1026];
  const zoomLevel = 15;
 
  const codingSpot = new Icon({
    iconUrl: "/images/computer-solid.svg",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
  });
 
  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={codingSpot}>
        <Popup>24 hours coding area <img draggable="false" role="img" class="emoji" alt="👨‍💻" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f468-200d-1f4bb.svg"> </Popup>
      </Marker>
    </MapContainer>
  );
};```