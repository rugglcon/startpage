$(document).ready(function() {
	$.ajax({
		url: "https://api.wunderground.com/api/5040da7e655d1412/geolookup/conditions/q/IA/Ames.json",
		dataType: "jsonp",
		success: function(data) {
			handle_weather(data);
		}
	});

	function handle_weather(parsed_json) {
		var tempf = parsed_json.current_observation.temp_f;
		$('#weather_temp').html('Current temperature: ' + tempf + '&deg');
		var condition = parsed_json.current_observation.weather;
		var winddir = parsed_json.current_observation.wind_dir;
		var windmph = parsed_json.current_observation.wind_mph;
		$('#wind_mph').html('Wind is ' + windmph + ' mph coming from ' + winddir);
		switch(condition.toLowerCase()) {
			case 'overcast':
				condition = 'cloudy';
				break;
			case 'scattered clouds':
				condition = 'partlycloudy';
				break;
			case 'thunderstorm':
				condition = 'tstorms';
				break;
			case 'thunderstorms':
				condition = 'tstorms';
				break;
			case 'freezing rain':
				condition = 'sleet';
				break;
			case 'partly sunny':
				condition = 'partlysunny';
				break;
			case 'partly cloudy':
				condition = 'partlycloudy';
				break;
			case 'mostly sunny':
				condition = 'mostlysunny';
				break;
			case 'mostly cloudy':
				condition = 'mostlycloudy';
				break;
			case 'haze':
				condition = 'hazy';
				break;
			case 'chance of a thunderstorm':
				condition = 'chancetstorms';
				break;
			case 'chance of thunderstorms':
				condition = 'chancetstorms';
				break;
			case 'chance of snow':
				condition = 'chancesnow';
				break;
			case 'chance of sleet':
				condition = 'chancesleet';
				break;
			case 'chance of freezing rain':
				condition = 'chancesleet';
				break;
			case 'chance rain':
				condition = 'chancerain';
				break;
			case 'chance of rain':
				condition = 'chancerain';
				break;
			case 'chance of flurries':
				condition = 'chanceflurries';
				break;
			case 'light snow':
				condition = 'snow';
				break;
			default:
				break;
		}
		$('#weather_icon').html('<img src=\"https://icons.wxug.com/i/c/i/' + condition + '.gif\"/>');
	}
});
