import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider() {
    return (
        <div>AuthContextProvider</div>
    )
}