let input = document.getElementById("input1");
let button = document.getElementById("button1");
let textArea = document.getElementsByTagName("textarea")[0];
let h3 = document.getElementsByTagName("h3")[0];
let i = 0;
let winningNumber = Math.floor(Math.random() * 10) + 1;

const init = (event) => {
	if (input.value === `${winningNumber}` && event.keyCode === 13 && i < 5) {
		showRight();
		input.value = ``;
	}
	else if (input.value !== `${winningNumber}` && event.keyCode === 13 && i < 5) {
		showWrong();
		input.value = ``;
	}
	else if (i >= 5) {
		youLost();
	}
}

const onit = () => {
	if (input.value === `${winningNumber}` && i < 5) {
		showRight();
		input.value = ``;
	}
	else if (input.value !== `${winningNumber}`  && i < 5) {
		showWrong();
		input.value = ``;
	}
	else if (i >= 5) {
		youLost();
	}
}

const showRight = () => {
	alert("You're Right!");
}

const showWrong = () => {
	alert("Incorrect, Try again.");
	i = i + 1;
}

const youLost = () => {
	alert("Game over, guess limit reached.");
}

const showAnswer = () => {
	alert(`Correct answer is ${winningNumber}`);
}

button.addEventListener("click", onit);
input.addEventListener("keypress", init);
