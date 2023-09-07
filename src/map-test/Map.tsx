import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useUserContext } from "@context/index";
import { SidePanel } from "@/layouts";
import { LocationMarker } from "@/layouts";

type LatLngTuple = [number, number]

function Map() {
    const { user } = useUserContext();
    console.log(user);

    const position: LatLngTuple = user?.location || [-1.2921, 36.8219];
    const zoomLevel = 15;

    return (
        <div className="relative w-[100vw] h-screen">
            <div className="absolute inset-y-0 bottom-0 md:left-0  bg-white z-10">
                <SidePanel />
            </div>
            <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true} style={{ marginLeft: '25%', width: '75%', height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        TODO: Custom Popup
                    </Popup>
                </Marker>

                <LocationMarker />
            </MapContainer>
        </div>
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
