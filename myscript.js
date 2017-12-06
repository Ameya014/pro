function myMap() {			
  var mapIndia= {
  center:new google.maps.LatLng(12.971599,77.594563),
  zoom:9,
  mapTypeId: google.maps.MapTypeId.HYBRID
  };
			
  var mapChicago= {
  center:new google.maps.LatLng(41.878114,-87.629798),
  zoom:8,
  mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var mapI=new google.maps.Map(document.getElementById("India"),mapIndia);
  var mapC=new google.maps.Map(document.getElementById("Chicago"),mapChicago);
		
 }
		