# RouteWISELY MVP – Developer Guide

**Initial MVP backup: Verified live deployment, Leaflet success with Boone.geojson**

This repository contains the fully functional MVP for RouteWISELY™, optimized for lightweight mobile map display and road segment logging. Designed to support municipalities and contractors.

---

## 🚦 Purpose
This app provides **offline-capable driver tools** to follow mapped routes and log visited segments, while a **web-based command center** handles project setup, route management, and progress tracking.

---

## ✅ Features (MVP)
### 📱 Mobile App (Driver-Facing)
- Loads any `.geojson` file placed in the `/public` folder
- Automatically centers on the device's GPS (or falls back to route center)
- Red dots = unvisited segments
- Green dots = visited segments
- Center-on-location button
- Responsive on all modern mobile browsers (Chrome, Safari, Edge)
- Minimal UI, optimized for clarity and safety

### 🖥️ Web App (Supervisor-Facing)
- Place one `.geojson` file per project under `/public/projectname/`
- Firebase Hosting serves `/index.html` as the landing map
- Subfolders can be used (e.g., `/public/boone`, `/public/grafton`)
- Map loads the ONLY `.geojson` file found in the current directory

---

## 📁 Folder Structure Guidelines

Each project must have:
```
/public/
  └── /boone/                  ← One folder per city/county/state
        ├── index.html
        ├── app.js
        ├── style.css
        ├── Boone.geojson      ← Only one *.geojson per folder
        └── RW-LogoGreen.png
```

---

## 📦 Key Files

| File          | Purpose                                  |
|---------------|------------------------------------------|
| `index.html`  | Map container + Leaflet.js base          |
| `app.js`      | Handles map loading, GPS tracking, marker coloring |
| `style.css`   | Minimal styling with support for dark/light modes |
| `firebase.json` | Hosting configuration with clean rewrites |

---

## 🔁 GeoJSON Routing Workflow

1. Create a subfolder inside `/public` for your project (e.g. `/public/boone`)
2. Add one valid `.geojson` file to that folder
3. Run `firebase deploy` from your terminal
4. Access the map at:  
   `https://your-firebase-project.web.app/boone/`

**Rules:**
- Only one `.geojson` file per folder
- File extension must be lowercase `.geojson`
- All folders must be deployed under `/public`
- No renaming or editing of `.geojson` unless verified

---

## 🚀 Terminal Deployment Instructions (Beginner Friendly)

### Step-by-step for Mac

1. **Open Terminal**  
   Go to Applications > Utilities > Terminal

2. **Navigate to the RouteWISELY project folder**  
   Replace `[your path]` with your actual folder location:
   ```bash
   cd ~/Documents/RouteWISELY/public/boone
   ```

3. **Run Firebase Deploy**  
   Make sure you’re authenticated (`firebase login`) and initialized (`firebase init`).
   Then run:
   ```bash
   firebase deploy
   ```

4. **Visit your hosted site**  
   ```
   https://[your-project-id].web.app/boone/
   ```

---

## 🔧 `firebase.json` (Hosting Config)

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 🔒 LocalStorage Keys

| Key             | Purpose                        |
|------------------|--------------------------------|
| `visitedMarkers` | Saves visited red dot IDs      |
| `driverStart`    | Optional log session start time |

---

## 🧭 Coming Soon – Pre-Production (PP) Upgrades
- Move from Leaflet to Google Maps SDK
- Live driver progress sharing
- Routing engine with turn-by-turn navigation
- Rerouting if off course
- Firebase user auth and log sync

---

## 🧠 Lessons Learned
- Do not rename or alter GeoJSON files after confirming they work
- Always test in incognito if local cache interferes
- Only place `.geojson` in final deployment folder before `firebase deploy`
- Leaflet requires a centered map if GPS is not present

---

**For future versions: maintain this README and keep a full copy of each working `/project/` folder in both Firebase and GitHub.**
