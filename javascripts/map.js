	
	function initialize()
	{
	var mapProp = {
	  center: {lat:41.878178, lng:-87.628964},
	  zoom:5,
	  mapTypeId:google.maps.MapTypeId.ROADMAP
	  };

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker=new google.maps.Marker({
	  position: mapProp.center,
	  });

	marker.setMap(map);
	}

	google.maps.event.addDomListener(window, 'load', initialize);