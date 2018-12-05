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

let canvas = document.getElementById('canvas');

let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKeyAndUnits = '&APPID=727c2f55c3d9cc48f85080101f3b4ef0&units=imperial';

const c1weatherAsk = () => {

	//Setting up API URL
	let city = c1input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching and Displaying OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){
		console.log(data);
		c1temp.innerHTML = Math.round(data.main.temp) + '°';
		c1humid.innerHTML = Math.round(data.main.humidity) + '%';
		c1wind.innerHTML = Math.round(data.wind.speed) + 'mph';

		calculate();
		classToggle();
		updateGraph();

	})

	//Alert Error
	.catch(function(error){
		console.log(JSON.stringify(error))
		alert('City not found.');
	})

}

const c3weatherAsk = () => {

	//Setting up API URL
	let city = c3input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching and Displaying OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){
		console.log(data);
		c3temp.innerHTML = Math.round(data.main.temp) + '°';
		c3humid.innerHTML = Math.round(data.main.humidity) + '%';
		c3wind.innerHTML = Math.round(data.wind.speed) + 'mph';

		calculate();
		classToggle();

	})

	//Alert Error
	.catch(function(error){
		console.log(JSON.stringify(error))
		alert('City not found.');
	})

}

const classToggle = () => {

	//Clearing class names
	c2temp.className = "";
	c2humid.className = "";
	c2wind.className = "";

	//Comparing temps and changing class
	if (c1input.value != '' && c3input.value != ''){
		if (Math.abs(parseFloat(c1temp.innerHTML)) > Math.abs(parseFloat(c3temp.innerHTML))) {
			c2temp.classList.toggle("blue");
		} else if (Math.abs(parseFloat(c1temp.innerHTML)) < Math.abs(parseFloat(c3temp.innerHTML))) {
			c2temp.classList.toggle("orange");
		} else {
			c2temp.classList.toggle("black");
		}
	}

	//Comparing humidity
	if (c1input.value != '' && c3input.value != ''){
		if (Math.abs(parseFloat(c1humid.innerHTML)) > Math.abs(parseFloat(c3humid.innerHTML))) {
			c2humid.classList.toggle("blue");
		} else if (Math.abs(parseFloat(c1humid.innerHTML)) < Math.abs(parseFloat(c3humid.innerHTML))) {
			c2humid.classList.toggle("orange");
		} else {
			c2humid.classList.toggle("black");
		}
	}

	//Comparing wind
	if (c1input.value != '' && c3input.value != ''){
		if (Math.abs(parseFloat(c1wind.innerHTML)) > Math.abs(parseFloat(c3wind.innerHTML))) {
			c2wind.classList.toggle("blue");
		} else if (Math.abs(parseFloat(c1wind.innerHTML)) < Math.abs(parseFloat(c3wind.innerHTML))) {
			c2wind.classList.toggle("orange");
		} else {
			c2wind.classList.toggle("black");
		}
	}

}

//Calculates and displays difference between cities
const calculate = () => {
	if (c1input.value != '' && c3input.value != ''){
		c2temp.innerHTML = Math.abs(parseFloat(c1temp.innerHTML) - parseFloat(c3temp.innerHTML)) + '°';
		c2humid.innerHTML = Math.abs(parseFloat(c1humid.innerHTML) - parseFloat(c3humid.innerHTML)) + '%';
		c2wind.innerHTML = Math.abs(parseFloat(c1wind.innerHTML) - parseFloat(c3wind.innerHTML)) + 'mph';
	}
}



//Making graph


const updateGraph = () => {

	av = (Math.abs(parseFloat(c1temp.innerHTML))) * 2.5;
	let c = canvas.getContext('2d');

	c.fillStyle = 'rgb(57, 182, 255)';
	c.fillRect(0, 0, 0, 0);
	c.fillRect(5, 0, 50, av);
}

