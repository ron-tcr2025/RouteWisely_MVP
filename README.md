# RouteWISELY™ MVP — Project README

> “Initial MVP backup: Verified live deployment, Leaflet success with Boone.geojson”

## 📍 Overview

**RouteWISELY™** is a lightweight GPS tracking and field logging web application designed to help municipal teams track which roads have been visited during data collection projects. This MVP focuses on offline-compatible driving logs, visual feedback, and simplicity for use on mobile devices in remote regions.

---

## 🚀 Features

- Live **GPS tracking** of the device using HTML5 Geolocation API
- Auto-updating **green/red** route segments using GeoJSON points
- Persistent **localStorage logging** for visited road segments
- Compass-style 🧭 **re-center button**
- Optional **preview mode** for viewing remote projects before arrival
- Automatic loading of `Boone.geojson` or fallback to a default file
- Auto-arrow that points toward nearest unvisited marker
- Compatible with all mobile and desktop browsers

---

## ⚙️ Dependencies

- **Leaflet.js 1.9.4**
  - CDN for map rendering (`OpenStreetMap`)
- **HTML5 Geolocation API**
  - For real-time GPS position updates
- **LocalStorage**
  - Browser-native visited segment logging (no backend required for MVP)
- **Firebase Hosting**
  - Google Cloud static hosting for web delivery

---

## 🗂 File Structure

```bash
/public
├── index.html           # Core web page with Leaflet map and UI elements
├── app.js               # JavaScript logic for GPS, route rendering, logging
├── style.css            # Visual styling for map controls and buttons
├── RW-LogoGreen.png     # RouteWISELY™ logo used in top-left
├── Boone.geojson        # (not on GitHub) Loaded dynamically for segment map
└── firebase.json        # Firebase hosting configuration

🔐 Permissions + GPS Access
The app requires location access permission. If denied, the map defaults to the .fitBounds() of the GeoJSON file.

No login is required in the MVP. Future phases will use Firebase Auth.

🛠 Terminal Setup & Deployment
You can use this on macOS Terminal (or other CLI with Firebase tools installed).

✅ One-time setup
bash
Copy
Edit
npm install -g firebase-tools
firebase login
firebase init hosting  # Choose existing project, public folder = public
🔄 Deploy changes
bash
Copy
Edit
firebase deploy
Or to re-authenticate if you hit an error:

bash
Copy
Edit
firebase login --reauth
Preview a live build (optional)
bash
Copy
Edit
firebase hosting:channel:deploy preview_name
🧠 Important Lessons Learned
GeoJSON File Size: Large .geojson files (like Boone or Missoula) can slow rendering. Offload this to Google Cloud Storage or use pagination in future versions.

Avoid Leaflet performance bottlenecks by minimizing styling overhead and ensuring L.geoJSON parses efficiently.

Map Preview vs Live Tracking:

When previewing remotely, center the map using .fitBounds() from GeoJSON.

When tracking live, the app uses the current location and arrow compass to guide the user.

Future versions will include a slider toggle between “Preview Mode” and “Live Mode”.

Persistent LocalStorage Logging: All visited points are saved locally in the browser using STORAGE_KEY = 'visitedMarkers'.

No Firebase database is used in this MVP. This minimizes setup complexity.

Logo placement was moved to avoid button overlap and z-index conflicts.

📌 GeoJSON Handling Notes
File must be placed in /public (not in a nested folder)

Filename should match what is loaded in app.js (Boone.geojson or fallback)

Format must conform to standard FeatureCollection with Point geometry

Sample structure:

json
Copy
Edit
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "segment_id": "1000",
        "index": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-84.68, 38.99]
      }
    }
  ]
}
🔭 Future Enhancements (Phase 2+)
Firebase Firestore sync of visitedMarkers

Supervisor dashboard with live view of driver progress

Toggle UI for "Preview Mode" vs "Live Mode"

Route progress bar at bottom of screen:

Red = Remaining

Green = Completed

Estimate of time/distance remaining

Google Maps migration for performance and direction data

Offline buffering and upload sync once cellular returns

Real-time ETA and route clustering

✅ Status
✅ All MVP features complete and deployed

✅ Cross-device tested on iOS, Android, macOS (Safari, Chrome)

✅ Fully functional with Boone.geojson in Firebase Hosting

🔗 Links
Live Site: https://routewisely-mvp.web.app

Firebase Project: RouteWISELY-MVP

🧑‍💻 Maintainers
Built and tested by CloudRiver
Contact: info@thecloudriver.com

© 2025 RouteWISELY™ — All rights reserved.
