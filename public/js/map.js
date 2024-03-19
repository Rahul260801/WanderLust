mapboxgl.accessToken = mapToken;

    {/* let mapToken = mapToken;
    console.log(mapToken); */}
      const map = new mapboxgl.Map({
        // choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style:"mapbox://styles/mapbox/streets-v12", //style URL
          container: "map", // container ID
          // center: [77.2090, 28.6139], // starting position [lng, lat]
          center:listing.geometry.coordinates,
          zoom: 1, // starting zoom
          cooperativeGestures: true  
      });

      // console.log(coordinates);

      const marker1 = new mapboxgl.Marker({color:"red"})
      .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates but we cannot acces this directly on map.js b/c it is public js file so we shift these coordinate from ejs  just like in maptoken 
      .setPopup(new mapboxgl.Popup({offset: 25})
      // .setLngLat(e.lngLat)
      .setHTML(
        `<h4>${listing.location}</h4><p>Exact Location will be provided after the booking</p>`))
      .addTo(map);

      // ---------------- auto zoom animated transition--------------------------------
map.zoomTo(12, {
  duration: 8000,
  offset: [0, 0],
});

map.setMaxZoom(18.75);
// map.scrollZoom.disable();

// Add the control to the map.
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
  })
);

map.addControl(new mapboxgl.FullscreenControl());