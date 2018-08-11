const tl = document.getElementById("tl");
const tm = document.getElementById("tm");
const tr = document.getElementById("tr");
const ml = document.getElementById("ml");
const mm = document.getElementById("mm");
const mr = document.getElementById("mr");
const bl = document.getElementById("bl");
const bm = document.getElementById("bm");
const br = document.getElementById("br");
const h1 = document.getElementById("h1");

let turn = "ex";
let winner = false;
let turnCounter = 0;

const cat = () => {
	if ((turnCounter >= 9) && (winner === false)) {
		turn = "noone";
		h1.innerHTML = "Cat!";
	}
}

const winCheck = () => {
	if (tl.innerHTML === "O" && tm.innerHTML === "O" && tr.innerHTML === "O" || 
		ml.innerHTML === "O" && mm.innerHTML === "O" && mr.innerHTML === "O" ||
		bl.innerHTML === "O" && bm.innerHTML === "O" && br.innerHTML === "O" ||
		tl.innerHTML === "O" && ml.innerHTML === "O" && bl.innerHTML === "O" ||
		tm.innerHTML === "O" && mm.innerHTML === "O" && bm.innerHTML === "O" ||
		tr.innerHTML === "O" && mr.innerHTML === "O" && br.innerHTML === "O" ||
		tl.innerHTML === "O" && mm.innerHTML === "O" && br.innerHTML === "O" ||
		tr.innerHTML === "O" && mm.innerHTML === "O" && bl.innerHTML === "O") {
		h1.innerHTML = "O Wins!";
		gameOver();
		winner = true;
	}
	else if (tl.innerHTML === "X" && tm.innerHTML === "X" && tr.innerHTML === "X" || 
		ml.innerHTML === "X" && mm.innerHTML === "X" && mr.innerHTML === "X" ||
		bl.innerHTML === "X" && bm.innerHTML === "X" && br.innerHTML === "X" ||
		tl.innerHTML === "X" && ml.innerHTML === "X" && bl.innerHTML === "X" ||
		tm.innerHTML === "X" && mm.innerHTML === "X" && bm.innerHTML === "X" ||
		tr.innerHTML === "X" && mr.innerHTML === "X" && br.innerHTML === "X" ||
		tl.innerHTML === "X" && mm.innerHTML === "X" && br.innerHTML === "X" ||
		tr.innerHTML === "X" && mm.innerHTML === "X" && bl.innerHTML === "X") {
		h1.innerHTML = "X Wins!";
		gameOver();
		winner = true;
	}
}


const gameOver = () => {
	if (winner = true) {
		turn = "noone"
	}
}

const fillBox = (box) => {	
	if ((turn === "oh") && (box.innerHTML === "")) {
		turn = "ex";
		box.innerHTML = "O";
		h1.innerHTML = "X's turn.";
		turnCounter++;
	}
	else if ((turn === "ex") && (box.innerHTML === "")) {
		turn = "oh";
		box.innerHTML = "X";
		h1.innerHTML = "O's turn."
		turnCounter++;
	}
	winCheck();
	cat();
}

const reset = () => {
	tl.innerHTML = "";
	tm.innerHTML = "";
	tr.innerHTML = "";
	ml.innerHTML = "";
	mm.innerHTML = "";
	mr.innerHTML = "";
	bl.innerHTML = "";
	bm.innerHTML = "";
	br.innerHTML = "";
	winner = false;
	turnCounter = 0;
	turn = "ex";
	h1.innerHTML = "X goes first!";
}