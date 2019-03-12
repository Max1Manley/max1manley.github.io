//state object keeps track of game status
let state = {
	image1: 0,
	image2: 0,
	image3: 0,
	image4: 0,
	image5: 0,
	image6: 0,
	moves: 0,
	clicks: 0,
	c1Classes: null,
	c1Id: null,
	c2Classes: null,
	c2Id: null,
	matches: 0,
	stopClicks: false,
};

//assigning images to random cards
const imgAssign = () => {
	for (let i = 1; i < 13; i++) {	
		let randomNumber = Math.random();
		let cardCycle = document.getElementById(`${i}`);
		if (randomNumber < .1666 && state.image1 < 2) {
			cardCycle.classList.add("image1");
			document.getElementById(`${i}00`).classList.add("image100");
			state.image1++;
		} else if (randomNumber >= .1666 && randomNumber < .3332 && state.image2 < 2) {
			cardCycle.classList.add("image2");
			document.getElementById(`${i}00`).classList.add("image200");
			state.image2++;
		} else if (randomNumber >= .3332 && randomNumber < .4998 && state.image3 < 2) {
			cardCycle.classList.add("image3");
			document.getElementById(`${i}00`).classList.add("image300");
			state.image3++;
		} else if (randomNumber >= .4998 && randomNumber < .6664 && state.image4 < 2) {
			cardCycle.classList.add("image4");
			document.getElementById(`${i}00`).classList.add("image400");
			state.image4++;
		} else if (randomNumber >= .6664 && randomNumber < .833 && state.image5 < 2) {
			cardCycle.classList.add("image5");
			document.getElementById(`${i}00`).classList.add("image500");
			state.image5++;
		} else if (randomNumber >= .833 && state.image6 < 2) {
			cardCycle.classList.add("image6");
			document.getElementById(`${i}00`).classList.add("image600");
			state.image6++;
		} else {
			i--;
		}
	}
} 
imgAssign();

//creating count up timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//flips card over, saves card information in the state, if two cards are flipped it calls the matchHandler() function.
const flip = (card) => {
	if (card.classList.contains('is-flipped') === false && 
		card.classList.contains('stay-flipped') === false && 
		state.stopClicks === false){
		card.classList.add('is-flipped');
		state.clicks++;
		console.log(state.clicks);
		console.log(state.stopClicks);
	}
	if ( state.clicks === 1 ){
		state.c1Classes = card.classList.value;
		state.c1Id = card.id;
	} else if ( state.clicks >= 2 ){
		state.c2Classes = card.classList.value;
		state.c2Id = card.id;
		state.stopClicks = true;
		matchHandler();
		state.moves++;
	}
	document.getElementById('moves').innerHTML = 'Move ' + state.moves;
};

//removes the temporary is-flipped class but leaves the stay-flipped class
const flippedRemover = () => {
	for (let j = 1; j < 13; j++){
		document.getElementById(`${j}00`).classList.remove('is-flipped');
		state.stopClicks = false;
	}
};

//checks if required amout of matches is met and alerts with a congratulatory message
const winAlert = () => {
	if(state.matches === 6){
		alert(`Your Time Is ${minutesLabel.innerHTML}:${secondsLabel.innerHTML}!` );
	}
}

//checks if the two card share the same image and that it isn't just the same card clicked twice
//first if statement adds stay-flipped and removes is-flipped as well as adding 1 to state.matches
//second if statment resets the classes and clicks saved in state and delays the flippedRemover()
const matchHandler = () => {
	if ( state.c1Classes === state.c2Classes && state.c1Id !== state.c2Id ) {
		state.matches++;
		document.getElementById(state.c1Id).classList.add('stay-flipped');
		document.getElementById(state.c2Id).classList.add('stay-flipped');
		for (let f = 1; f < 13; f++){
			document.getElementById(`${f}00`).classList.remove('is-flipped');			
		}
		state.stopClicks = false;
		state.clicks = 0;
		setTimeout(winAlert, 750);
	} 
	if ( state.c1Classes !== state.c2Classes ) {
		state.c1Classes = null;
		state.c2Classes = null;
		setTimeout(flippedRemover, 1500);
		state.clicks = 0;
	}
}

//resets state, classes, timer, and re-shuffles cards
const reset = () => {
	console.log('yeah man reset it');
	state = {
		image1: 0,
		image2: 0,
		image3: 0,
		image4: 0,
		image5: 0,
		image6: 0,
		moves: 0,
		clicks: 0,
		c1Classes: null,
		c1Id: null,
		c2Classes: null,
		c2Id: null,
		matches: 0,
		stopClicks: false,
	};
	for (let f = 1; f < 13; f++){
		document.getElementById(`${f}00`).classList.remove('is-flipped');	
		document.getElementById(`${f}00`).classList.remove('stay-flipped');	
		document.getElementById(`${f}`).classList.remove('image1');
		document.getElementById(`${f}`).classList.remove('image2');
		document.getElementById(`${f}`).classList.remove('image3');
		document.getElementById(`${f}`).classList.remove('image4');
		document.getElementById(`${f}`).classList.remove('image5');
		document.getElementById(`${f}`).classList.remove('image6');	
		document.getElementById(`${f}00`).classList.remove('image100');
		document.getElementById(`${f}00`).classList.remove('image200');
		document.getElementById(`${f}00`).classList.remove('image300');
		document.getElementById(`${f}00`).classList.remove('image400');
		document.getElementById(`${f}00`).classList.remove('image500');
		document.getElementById(`${f}00`).classList.remove('image600');	
	}
	document.getElementById('moves').innerHTML = 'Move 0';
	totalSeconds = 0;
	setTimeout(imgAssign, 550);
}