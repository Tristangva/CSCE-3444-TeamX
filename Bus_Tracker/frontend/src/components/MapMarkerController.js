module.exports = {
  // Initialize and add the map
  initMap: function() {
    // The location of Uluru
    var uluru = {lat: -20.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
};
