/**The main use case for the Beacon API is to send analytics such as client-side events or
 *  session data to the server.  */

export interface Beacon {
    id: string;
    uuid: string;
    major?: number;
    minor?: number;
    rssi: number;
    txPower?: number;
    accuracy?: number;
    proximity: BeaconProximity;
    // METHOD: navigator.sendBeacon {sendBeacon(url: string | URL, data?: BodyInit | null): boolean;}
}

export enum BeaconProximity {
    Immediate = "immediate",
    Near = "near",
    Far = "far",
    Unknown = "unknown",
}

export interface BeaconOptions {
    uuid?: string;
    major?: number;
    minor?: number;
    includeTxPower?: boolean;
}

export interface BeaconService {
    startScan(options?: BeaconOptions): void;
    stopScan(): void;
    onBeaconDetected: (beacon: Beacon) => void;
    onBeaconLost: (beacon: Beacon) => void;
}
