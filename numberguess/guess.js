let input = document.getElementById("input");
let button = document.getElementsByTagName("button")[0];
let textArea = document.getElementsByTagName("textArea")[0];
let i = 0;
let winningNumber = Math.floor(Math.random() * 10) + 1;

textArea.value = `${winningNumber}`;

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

const showRight = () => {
	alert("You're Right!");
}

const showWrong = () => {
	alert("Wrong Bozo.");
	i = i + 1;
}

const youLost = () => {
	alert("Game over loser.");
}

input.addEventListener("keypress", init);