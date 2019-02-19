let state = {
	image1: 0,
	image2: 0,
	image3: 0,
	image4: 0,
	image5: 0,
	image6: 0,
	clicks: 0,
	c1Classes: null,
	c1Id: null,
	c2Classes: null,
	c2Id: null,
	matches: 0,
	stopClicks: false,
};

//assigning images to random cards
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
};

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
	}
};

const flippedRemover = () => {
		
	for (let j = 1; j < 13; j++){
		document.getElementById(`${j}00`).classList.remove('is-flipped');
		state.stopClicks = false;
	}
};

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
	} 
	if ( state.c1Classes !== state.c2Classes ) {
		state.c1Classes = null;
		state.c2Classes = null;
		setTimeout(flippedRemover, 1500);
		state.clicks = 0;
	}
};