$(document).ready(function() {
	$.ajax({
		url: "http://api.wunderground.com/api/5040da7e655d1412/geolookup/conditions/q/IA/Ames.json",
		dataType: "jsonp",
		success: function(data) {
			handle_weather(data);
		}
	});

	function handle_weather(parsed_json) {
		var location = parsed_json.location.city;
		var tempf = parsed_json.current_observation.temp_f;
		$('#weather_temp').html("Current temperature: " + tempf + '&deg');
		$('#weather_icon').html(parsed_json.current_observation.weather);
		var winddir = parsed_json.current_observation.wind_dir.toLowerCase();
		$('#wind_icon').html('<i class=\"wi wi-wind from-' + winddir + '\"></i>');
		//switch(parsed_json.current_observation.wind_dir) {
			//case 'NNW':
				//$('#wind_icon').html('<i class="wi wi-wind from-nnw"></i>');
				//break;
			//case 'NNE':
				//$('#wind_icon').html('<i class="wi wi-wind from-nne"></i>');
				//break;
			//case 'NE':
				//$('#wind_icon').html('<i class="wi wi-wind from-ne"></i>');
				//break;
			//case 'NW':
				//$('#wind_icon').html('<i class="wi wi-wind from-nw"></i>');
				//break;
			//case 'N':
				//$('#wind_icon').html('<i class="wi wi-wind from-n"></i>');
				//break;
			//case 'W':
				//$('#wind_icon').html('<i class="wi wi-wind from-w"></i>');
				//break;
			//case 'E':
				//$('#wind_icon').html('<i class="wi wi-wind from-e"></i>');
				//break;
			//case 'S':
				//$('#wind_icon').html('<i class="wi wi-wind from-s"></i>');
				//break;
			//case 'SE':
				//$('#wind_icon').html('<i class="wi wi-wind from-se"></i>');
				//break;
			//case 'SW':
				//$('#wind_icon').html('<i class="wi wi-wind from-sw"></i>');
				//break;
			//case 'SSW':
				//$('#wind_icon').html('<i class="wi wi-wind from-ssw"></i>');
				//break;
			//case 'SSE':
				//$('#wind_icon').html('<i class="wi wi-wind from-sse"></i>');
				//break;
			//case 'WNW':
				//$('#wind_icon').html('<i class="wi wi-wind from-wnw"></i>');
				//break;
			//case 'ENE':
				//$('#wind_icon').html('<i class="wi wi-wind from-ene"></i>');
				//break;
			//case 'WSW':
				//$('#wind_icon').html('<i class="wi wi-wind from-wsw"></i>');
				//break;
			//case 'ESE':
				//$('#wind_mph').html(parsed_json.current_observation.wind_mph + 'mph');
				//$('#wind_icon').html('<i class="wi wi-wind from-ese"></i>');
				//break;
			//default:
				//$('#wind_icon').html(parsed_json.current_observation.wind_dir);
				//break;
		//}
	}
});
