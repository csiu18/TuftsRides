// Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5rb2FuanUiLCJhIjoiY2s5NmQwYXczMHVkdDNob201MmljZnk3OSJ9.X6W7DiJbZEsLh8RRO10T4w';

// Initialize, and set position and orientation
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-71.12213,42.40411], // starting position 
      zoom: 15,// starting zoom
    bearing: 80 // pitch in degrees
});

// Add Search Box 
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  map.addControl(directions, 'top-left');

// Add the stops labels
var CC_P_Row = new mapboxgl.Marker()
  .setLngLat([-71.119681, 42.405880]) 
  .addTo(map);

var Davis = new mapboxgl.Marker()
  .setLngLat([-71.122819, 42.396884]) 
  .addTo(map);

var TAB = new mapboxgl.Marker()
  .setLngLat([-71.125800, 42.400951]) 
  .addTo(map);


var CC_Talbot = new mapboxgl.Marker()
  .setLngLat([-71.120386, 42.405274]) 
  .addTo(map); 


var Carm = new mapboxgl.Marker()
  .setLngLat([-71.122377, 42.409699]) 
  .addTo(map); 

var Olin = new mapboxgl.Marker()
  .setLngLat([-71.120896, 42.408284]) 
  .addTo(map); 

// Add stop names as mouse hover pop ups
  map.on('load', function() {
  map.addSource('places', {
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
    'properties': {
    'description':                       
      '<strong>Mayer Campus Center P-Row</strong>',
    'icon': 'theatre'
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-71.119681, 42.405880] //CC_P_Row
    }
  },

  {
    'type': 'Feature',
    'properties': {
    'description':                        
      '<strong>Davis Square</strong>',
    'icon': 'theatre'
    },
      'geometry': {
      'type': 'Point',
      'coordinates': [-71.122819, 42.396884] // Davis Square
      }
  },

  {
    'type': 'Feature',
    'properties': {
    'description':                       
      '<strong>Tufts Administration Building</strong>',
    'icon': 'theatre'
    },
      'geometry': {
      'type': 'Point',
      'coordinates': [-71.125800, 42.400951] // TAB
      }
  },

  {
      'type': 'Feature',
      'properties': {
      'description':                        
        '<strong>Mayer Campus Ctr - Talbot</strong>',
      'icon': 'theatre'
    },
        'geometry': {
        'type': 'Point',
        'coordinates': [-71.120386, 42.405274] // CC_Talbot 
      }
    },

  {
      'type': 'Feature',
      'properties': {
      'description':                        
        '<strong>Carmichael Hall</strong>',
      'icon': 'theatre'
    },
      'geometry': {
      'type': 'Point',
      'coordinates': [-71.122377, 42.409699] // Carmichael Hall
      }
    },

    {
      'type': 'Feature',
      'properties': {
      'description':                       
        '<strong>Olin Center</strong>',
      'icon': 'theatre'
    },
      'geometry': {
      'type': 'Point',
      'coordinates': [-71.120896, 42.408284] // Olin Center
      }
    }
  ]
  }
  });

  // Add a layer showing the places.
  map.addLayer({
  'id': 'places',
  'type': 'symbol',
  'source': 'places',
  'layout': {
  'icon-image': '{icon}-15',
  'icon-allow-overlap': true
  }
  });
  
  // Create a popup, but don't add it to the map yet.
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
  
  map.on('mouseenter', 'places', function(e) {
  // Change the cursor style as a UI indicator.
  map.getCanvas().style.cursor = 'pointer';
  
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
  
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  
  // Populate the popup and set its coordinates
  // based on the feature found.
  popup
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });
  
  map.on('mouseleave', 'places', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
      });
  });


//------------------------- Get User Location ----------------------//

var validPos = false;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storeLocation);
        validPos = true;
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var myLat = 0.0;
var myLong = 0.0;

function storeLocation(position) {
    myLat = position.coords.latitude;
    myLong = position.coords.longitude;
    findshortest(myLong, myLat);
}

// Click the button on map and display user's location
map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
    },
      trackUserLocation: true
    })
)

//------------------------- Find closest station ----------------------//

// store an json object with stnames, coords, and address, temporary for now
// retrive from database later
var stations = [
  {
    "stname" : "CC_P_Row",
    "coords" : [-71.119681, 42.405880],
    "address" : "40 Professors Row, Medford, Massachusetts 02155, United States"
  },
  {
    "stname" : "Davis",
    "coords" : [-71.122819, 42.396884],
    "address" : "Boston Burger Company, 37 Davis Sq, Somerville, Massachusetts 02144, United States"
  },
  {
    "stname" : "TAB",
    "coords" : [-71.125800, 42.400951],
    "address" : "155 Holland Street, Somerville, Massachusetts 02144, United States"
  },
   {
    "stname" : "CC_Talbot", 
    "coords" : [-71.120386, 42.405274],
    "address": "Jumbo Express, Talbot Ave, Medford, Massachusetts 02155, United States"
  },
   {
    "stname" : "Carm",
    "coords" : [-71.122377, 42.409699],
    "address" : "Carmichael Dining Hall, 200 Packard Ave, Medford, Massachusetts 02155, United States"
  },
   {
    "stname" : "Olin",
    "coords" : [-71.120896, 42.408284],
    "address" : "Olin Center, 180 Packard Ave, Medford, Massachusetts 02155, United States"
  }
];


function findshortest(longval, latval) 
{
  // change after getting database 
  var from = turf.point([longval, latval]);
  var options = {units: 'meters'};

  var indexShortest = 0;
  var shortestname = "";
  var distance = 0;
  var comparedist = 0;

  // compare all the distances and find the shortest
  for (i = 0; i < stations.length; i++) {
      var to = turf.point(stations[i].coords);
      distance = turf.distance(from, to, options);
      if ( comparedist == 0 ){
        comparedist = distance;
      } else if ( distance < comparedist ) {
        comparedist = distance;
        shortestname = stations[i].stname;
        indexShortest = i;
        // Debugging statements
          console.log("shortestdist is  " + comparedist + "\n");
          console.log("shortest to from is " + shortestname + "\n");
      }
  }

   // Debugging statements
    console.log(longval+ " and " + latval);
    console.log("index is " + indexShortest);
    console.log("this is lat" + stations[indexShortest].coords[1]);
    console.log("this is long" + stations[indexShortest].coords[0]);
  
  // Set map origin and destination
  directions.setOrigin(longval+ "," + latval);
  directions.setDestination(stations[indexShortest].address);
}