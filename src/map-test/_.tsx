import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useUserContext } from "../context/auth/UserContext";

type LatLngTuple = [number, number]

function Map() {

    const { user } = useUserContext()
    console.log(user)

    const position: LatLngTuple = user?.location || [-1.2921, 36.8219];
    const zoomLevel = 15;

    return (
        <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <MapPopup username={user?.username} homeAddress={user?.home_address} />
                </Popup>
            </Marker>
        </MapContainer>
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
        <div className="bg-gray-50">
            <Map />
        </div>
    );
}

export default UserMap;
