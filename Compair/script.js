//Max Manley - 2018-19

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


let c1icon = document.getElementById('c1icon');
let c3icon = document.getElementById('c3icon');
let canvas = document.getElementById('canvas');

let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKeyAndUnits = '&APPID=727c2f55c3d9cc48f85080101f3b4ef0&units=imperial';

const handleOption = (myForm) =>{
	if (myForm.optionList.selectedIndex === 0){
		api = 'https://api.openweathermap.org/data/2.5/weather?q=';
	} else if (myForm.optionList.selectedIndex === 1){
		api = 'https://api.openweathermap.org/data/2.5/weather?zip=';
	}
}


//no repeat on this function?
const c1weatherAsk = () => {

	//Setting up API URL
	let city = c1input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching and Displaying OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){

		//Creates icon left of temp
		c1icon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
		
		console.log(data);
		c1temp.innerHTML = Math.round(data.main.temp) + "°";
		c1humid.innerHTML = Math.round(data.main.humidity) + '%';

		let windDirection = '';
		let dwd = parseFloat(data.wind.deg);

		if (dwd > 337.5 || dwd < 22.5){
			windDirection = 'N';
		} else if (dwd > 22.5 && dwd < 67.5){
			windDirection = 'NE';
		} else if (dwd > 67.5 && dwd < 112.5){
			windDirection = 'E';
		} else if (dwd > 112.5 && dwd < 157.5){
			windDirection = 'SE';
		} else if (dwd > 157.5 && dwd < 202.5){
			windDirection = 'S';
		} else if (dwd > 202.5 && dwd < 247.5){
			windDirection = 'SW';
		} else if (dwd > 247.5 && dwd < 292.5){
			windDirection = 'W';
		} else if (dwd > 292.5 && dwd < 337.5){
			windDirection = 'NW';
		}

		c1wind.innerHTML = Math.round(data.wind.speed) + 'mph' + ' ' + windDirection;

		calculate();
		classToggle();

	})

	//Alert Error
	.catch(function(error){
		console.log(JSON.stringify(error))
		alert('City not found. Enter only either city name, or Zip.');
	})

}

//no reapeat on this function?
const c3weatherAsk = () => {

	//Setting up API URL
	let city = c3input.value;
	const url = api + city + apiKeyAndUnits;

	//Fetching and Displaying OpenWeather Data
	fetch(url)
	.then((res) => res.json())
	.then(function(data){
		console.log(data);

		c3icon.innerHTML = `<img height=150px width=150px src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
		c3temp.innerHTML = Math.round(data.main.temp) + '°';
		c3humid.innerHTML = Math.round(data.main.humidity) + '%';

		let windDirection = '';
		let dwd = parseFloat(data.wind.deg);

		if (dwd > 337.5 || dwd < 22.5){
			windDirection = 'N';
		} else if (dwd > 22.5 && dwd < 67.5){
			windDirection = 'NE';
		} else if (dwd > 67.5 && dwd < 112.5){
			windDirection = 'E';
		} else if (dwd > 112.5 && dwd < 157.5){
			windDirection = 'SE';
		} else if (dwd > 157.5 && dwd < 202.5){
			windDirection = 'S';
		} else if (dwd > 202.5 && dwd < 247.5){
			windDirection = 'SW';
		} else if (dwd > 247.5 && dwd < 292.5){
			windDirection = 'W';
		} else if (dwd > 292.5 && dwd < 337.5){
			windDirection = 'NW';
		}

		c3wind.innerHTML = Math.round(data.wind.speed) + 'mph' + ' ' + windDirection;

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

	//Comparing humidity and changing class
	if (c1input.value != '' && c3input.value != ''){
		if (Math.abs(parseFloat(c1humid.innerHTML)) > Math.abs(parseFloat(c3humid.innerHTML))) {
			c2humid.classList.toggle("blue");
		} else if (Math.abs(parseFloat(c1humid.innerHTML)) < Math.abs(parseFloat(c3humid.innerHTML))) {
			c2humid.classList.toggle("orange");
		} else {
			c2humid.classList.toggle("black");
		}
	}

	//Comparing wind and changing class
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