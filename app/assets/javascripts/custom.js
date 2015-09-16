$(document).ready(function() {
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: { maxZoom: 15}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([
      {
        "lat": 43.067846,
        "lng": -85.949845,
        "infowindow": "DriveTrain Solutions \n 411 64th Avenue North \n Coopersville, MI, 49404"
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  });
});


//          "lat": 43.067846,
//          "lng": -85.949845,