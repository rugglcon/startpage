$(document).ready(function() {
	$.ajax({
		url: "https://api.wunderground.com/api/5040da7e655d1412/geolookup/conditions/q/IA/Ames.json",
		dataType: "jsonp",
		success: function(data) {
			handle_weather(data);
		},
		error: function(data) {
			$('#cur_weather_temp').html('Error: ' + data);
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
		var periods = forecast_data.forecast.simpleforecast.forecastday;
		for(var i = 1; i < periods.length - 1; i++) {
			var forecast_div = $('<div class="border_top"></div>');
			var high = periods[i].high.fahrenheit;
			var low = periods[i].low.fahrenheit;
			var day = $('<p class="small-bottom"></p>').text(periods[i].date.weekday + ', High: ' + high + ' Low: ' + low);
			var icon = $('<img src="' + periods[i].icon_url.replace('i/c/k/', 'i/c/i/') + '"/>');
			var avewind = periods[i].avewind.mph;
			var avewind_dir = periods[i].avewind.dir;
			var wind = $('<p class="small-top"></p>').text('Ave wind: ' + avewind + ' mph');
			$(forecast_div).append(day, icon, wind);
			$('#forecast').append(forecast_div);
		}
	}

	function handle_weather(parsed_json) {
		var tempf = parsed_json.current_observation.temp_f;
		$('#cur_weather_temp').html('Current temperature: ' + tempf + '&deg');
		var condition = parsed_json.current_observation.weather;
		var winddir = parsed_json.current_observation.wind_dir;
		var windmph = parsed_json.current_observation.wind_mph;
		$('#cur_wind_mph').html('Wind is ' + windmph + ' mph coming from ' + winddir);
		var condition_icon = parsed_json.current_observation.icon_url;
		$('#cur_weather_icon').html('<img src=\"' + condition_icon.replace('i/c/k/', 'i/c/i/') + '\"/>');
	}
});
