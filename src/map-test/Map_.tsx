import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useUserContext } from "@context/index";
import { SidePanel } from "@/layouts";
import { LocationMarker } from "@/layouts";

type LatLngTuple = [number, number];

export function Map() {
    const { user } = useUserContext();
    console.log(user);

    const position: LatLngTuple = user?.location || [-1.2921, 36.8219];
    const zoomLevel = 13; // Adjust the zoom level as needed

    return (
        <div className="relative w-screen h-screen">
            <div className="md:absolute inset-y-0 bottom-0 md:left-0 z-10">
                <SidePanel />
            </div>

            <div className="md:ml-[25%] w-full h-screen">
                <MapContainer
                    center={position}
                    zoom={zoomLevel}
                    scrollWheelZoom={true}
                    style={{ width: "100%", height: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Hello</Popup>
                    </Marker>
                    {/* Optional: Add custom location marker */}
                    <LocationMarker />
                </MapContainer>
            </div>
        </div>
    );
}