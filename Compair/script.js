let c1input = document.getElementById('c1input');
let c1temp = document.getElementById('c1temp');
let c1humid = document.getElementById('c1humid');
let c1wind = document.getElementById('c1wind');

let c2temp = document.getElementById('c2temp');
let c2humid = document.getElementById('c2humid');
let c2wind = document.getElementById('c2wind');

let c3input = document.getElementById('c3input');
let c3temp = document.getElementById('c3temp');
let c3humid = document.getElementById('c3humid');
let c3wind = document.getElementById('c3wind');

let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKeyAndUnits = '&APPID=727c2f55c3d9cc48f85080101f3b4ef0&units=imperial';

const calculate = () => {
	if (c1input.value != '' && c3input.value != ''){
		c2temp.innerHTML = Math.abs(parseFloat(c1temp.innerHTML) - parseFloat(c3temp.innerHTML)) + '°';
		c2humid.innerHTML = Math.abs(parseFloat(c1humid.innerHTML) - parseFloat(c3humid.innerHTML)) + '%';
		c2wind.innerHTML = Math.abs(parseFloat(c1wind.innerHTML) - parseFloat(c3wind.innerHTML)) + 'mph';
	}
}

const c1weatherAsk = () => {
	let city = c1input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){
		console.log(data);
		c1temp.innerHTML = Math.ceil(data.main.temp) + '°';
		c1humid.innerHTML = Math.ceil(data.main.humidity) + '%';
		c1wind.innerHTML = Math.ceil(data.wind.speed) + 'mph';

		calculate();

	})

	.catch(function(error){
		console.log(JSON.stringify(error));
	})

}

const c3weatherAsk = () => {
	let city = c3input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){
		console.log(data);
		c3temp.innerHTML = Math.ceil(data.main.temp) + '°';
		c3humid.innerHTML = Math.ceil(data.main.humidity) + '%';
		c3wind.innerHTML = Math.ceil(data.wind.speed) + 'mph';

		calculate();

	})

	.catch(function(error){
		console.log(JSON.stringify(error))
		alert('City not found.');
	})

}