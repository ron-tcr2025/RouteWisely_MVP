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
