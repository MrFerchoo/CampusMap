var map;
  var laSalleBajio  = {
      lat:21.150908,
      lng:-101.71110470000002
  }
  function initMap() {
      var mapDiv = document.getElementById('map');
      var mapOptions = {
        center: laSalleBajio,
        zoom:20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
     map = new google.maps.Map(mapDiv,mapOptions);
}