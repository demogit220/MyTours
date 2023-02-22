/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGVtbzA4IiwiYSI6ImNsZWN5Y3NtODAxNzMzc3MyYXh1MjVnNGcifQ.A2HAanjnhoY8pYLrnjyAcA';
  var map = new mapboxgl.Map({
    container: 'map', // needed in html with id map
    style: 'mapbox://styles/demo08/cled5048s000t01msse82n3ht',
    scrollZoom: false,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds(); // The area that will be displayed in our map

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
