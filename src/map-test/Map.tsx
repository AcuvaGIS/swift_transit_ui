import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useUserContext } from "../context/auth/UserContext";
import PanelTest from "@/layouts/side-panel/PanelTest";
////////////////////////////////////////////////

function LocationMarker() {
    const [position, setPosition] = useState<any | null>(null); // !REMOVE ANY

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

////////////////////////////////////


type LatLngTuple = [number, number]

function Map() {

    const { user } = useUserContext()
    console.log(user)

    const position: LatLngTuple = user?.location || [-1.2921, 36.8219];
    const zoomLevel = 15;

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            {/* Sidebar overlay */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '25%', backgroundColor: 'white' }}>
                <PanelTest />
            </div>

            {/* Map */}
            <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true} style={{ marginLeft: '25%', width: '75%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <MapPopup username={user?.username} homeAddress={user?.home_address} />
                    </Popup>
                </Marker>

                <LocationMarker />
            </MapContainer>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MapPopup({ username, homeAddress }: any) {
    return (
        <>
            <h3>Howdy, {username}</h3>
            <h4>Address: {homeAddress}</h4>
            {/* Geocode location */}
        </>
    );
}

function UserMap() {
    return (
        <>
            <Map />
        </>
    );
}

export default UserMap;
