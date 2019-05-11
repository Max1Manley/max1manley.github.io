import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ yoData }) => {	
	return(
		<div>
			<h3>
				{`${yoData.weather.data.main.temp}`}
			</h3>
		</div>
	);
}


export default WeatherDisplay;