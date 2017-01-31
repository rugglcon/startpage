$(document).ready(function() {
	$.ajax({
		url: "https://api.wunderground.com/api/5040da7e655d1412/geolookup/conditions/q/IA/Ames.json",
		dataType: "jsonp",
		success: function(data) {
			handle_weather(data);
		},
		error: function(data) {
			$('#weather_temp').html('Error: ' + data);
		}
	});

	$.ajax({
		url: "https://api.wunderground.com/api/5040da7e655d1412/geolookup/forecast/q/IA/Ames.json",
		dataType: "jsonp",
		success: function(data) {
			handle_forecast(data);
		},
		error: function(data) {
			$('#weather').html('Error: ' + data);
		}
	});

	function handle_forecast(forecast_data) {
	}

	function handle_weather(parsed_json) {
		var tempf = parsed_json.current_observation.temp_f;
		$('#weather_temp').html('Current temperature: ' + tempf + '&deg');
		var condition = parsed_json.current_observation.weather;
		var winddir = parsed_json.current_observation.wind_dir;
		var windmph = parsed_json.current_observation.wind_mph;
		$('#wind_mph').html('Wind is ' + windmph + ' mph coming from ' + winddir);
		var condition_icon = parsed_json.current_observation.icon_url;
		$('#weather_icon').html('<img src=\"' + condition_icon.replace('i/c/k', 'i/c/i') + '\"/>');
	}
});
