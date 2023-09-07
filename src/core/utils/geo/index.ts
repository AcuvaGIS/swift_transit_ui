export function isGeoLocSupported() {
    if (navigator.geolocation) {
        return true;
    } else {
        console.log("Geolocation is not supported for this Browser/OS."); //! 
        return false;
    }
}