import { QueryClient } from "@tanstack/react-query";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

declare global {
    interface Window {
        _env_: {
            VITE_NAME?: string;
            VITE_GOOGLE_CLIENT_ID?: string;
            VITE_GOOGLE_REDIRECT_URL_SIGNUP?: string;
            VITE_BASE_URL?: string;
        };
    }
}

export const queryClient = new QueryClient();

export const persister = createSyncStoragePersister({
    storage: window.localStorage,
});
