// Initialize map
const map = L.map("map").setView([38.9946, -84.7316], 12); // Default to Boone County

// Load OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
}).addTo(map);

// Debug: Start
console.log("📍 Leaflet map initialized");

// Attempt to fetch the GeoJSON
fetch("Boone.geojson")
  .then((response) => {
    console.log("🔄 Fetching Boone.geojson...");
    if (!response.ok) throw new Error("❌ GeoJSON fetch failed");
    return response.json();
  })
  .then((data) => {
    console.log("✅ Boone.geojson loaded:", data);

    const geoLayer = L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 4,
          color: "red",
          fillColor: "red",
          fillOpacity: 0.85,
        });
      },
    }).addTo(map);

    map.fitBounds(geoLayer.getBounds());
    console.log("🗺️ GeoJSON rendered and map adjusted.");
  })
  .catch((err) => {
    console.error("❌ Failed to load or render GeoJSON:", err);
    alert("Failed to load project data. Check network or GeoJSON file.");
  });

// Recenter button logic
document.getElementById("locBtn").addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`📡 Device location found: ${latitude}, ${longitude}`);

      // Show direction-facing icon
      const arrowIcon = L.divIcon({
        className: "custom-arrow-icon",
        html: "🧭",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      L.marker([latitude, longitude], { icon: arrowIcon }).addTo(map);
      map.setView([latitude, longitude], 15);
    },
    (err) => {
      console.warn("⚠️ Geolocation failed:", err.message);
      alert("Could not determine current location.");
    }
  );
});
