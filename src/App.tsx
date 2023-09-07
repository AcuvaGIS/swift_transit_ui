import { Routes, Route } from "react-router-dom";

import {
  UnderConstruction,
} from "@core/components";
import UserMap from "./map-test/Map";


function App() {
  return (
    <div className="text-red-300">
      <Routes>
        <Route path="/" element={<UserMap />} />
        <Route path="/register" element={<UnderConstruction />} />
        <Route path="/login" element={<UnderConstruction />} />
        <Route path="/forgot-password" element={<UnderConstruction />} />

        {/* Dashboard */}


        {/* Matatus */}
        <Route path="/matatus" element={<UnderConstruction />}>
          <Route path=":matatuId" element={<UnderConstruction />} /> {/**Matatu Details */}
          <Route path=":matatuId/route" element={<UnderConstruction />} />
        </Route>

        {/* Routes */}
        <Route path="/routes" element={<UnderConstruction />}> {/**Route List */}
          <Route path=":routeId" element={<UnderConstruction />} /> {/**Single Route */}
          <Route path="plan" element={<UnderConstruction />} /> {/**Plan Trip */}
        </Route>


        {/* Analytics */}
        <Route path="/analytics" element={<UnderConstruction />}>
          <Route path="reports" element={<UnderConstruction />}> {/**Analytics Report */}
            <Route path="generate-reports" element={<UnderConstruction />} />
          </Route>
        </Route>

        {/* Preferences */}
        <Route path="/preferences" element={<UnderConstruction />}>
          <Route path="favorites" element={<UnderConstruction />} />
        </Route>

        {/* Notifications */}
        <Route path="/notifications" element={<UnderConstruction />}>
          <Route path="settings" element={<UnderConstruction />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<UnderConstruction />}>
          <Route path="matatus" element={<UnderConstruction />} />
          <Route path="routes" element={<UnderConstruction />} />
          <Route path="users" element={<UnderConstruction />} />
        </Route>

        {/* Billing */}
        <Route path="/billing" element={<UnderConstruction />}>
          <Route path="subscribe" element={<UnderConstruction />} />

          <Route path="cancel-subscription" element={<UnderConstruction />} />
        </Route>

        {/* Favorites */}
        <Route path="/favorites" element={<UnderConstruction />}>
          <Route path="add/:userId" element={<UnderConstruction />} />
          <Route path="remove/:userId/:favoriteId" element={<UnderConstruction />} />
          <Route path=":userId" element={<UnderConstruction />} /> {/**Favorite By ID */}
        </Route>

        {/* Offline Caching */}
        <Route path="/cache" element={<UnderConstruction />} />
        <Route path="/cache/clear" element={<UnderConstruction />} />

        {/* Analytics */}
        <Route path="/analytics" element={<UnderConstruction />}>
          <Route path="track-event" element={<UnderConstruction />} />
          <Route path="get-analytics" element={<UnderConstruction />} />
        </Route>

        {/* Notifications */}
        <Route path="/notifications" element={<UnderConstruction />}>
          <Route path=":userId" element={<UnderConstruction />} />
          <Route path="mark-read/:notificationId" element={<UnderConstruction />} />
          <Route path="delete/:notificationId" element={<UnderConstruction />} />
        </Route>

        {/* User Profile */}
        <Route path="/user/:userId" element={<UnderConstruction />} />

        {/* Real-Time Tracking */}
        <Route path="/real-time-tracking" element={<UnderConstruction />}>
          <Route path="start/:userId/:matatuId" element={<UnderConstruction />} />
          <Route path="stop/:userId/:matatuId" element={<UnderConstruction />} />
        </Route>

        {/* Analytics Reports */}
        <Route path="/analytics/reports" element={<UnderConstruction />}>
          <Route path="generate" element={<UnderConstruction />} />
        </Route>

        <Route path="*" element={<UnderConstruction />} /> {/**404 PAGE */}

      </Routes>
    </div>
  );
}

export default App;
