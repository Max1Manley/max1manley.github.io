let leftHP = document.getElementById("leftHP");
let leftAttack = document.getElementById("leftAttack");
let leftBlock = document.getElementById("leftBlock");
let leftHeal = document.getElementById("leftHeal");
let rightHP = document.getElementById("rightHP");
let rightAttack = document.getElementById("rightAttack");
let rightBlock = document.getElementById("rightBlock");
let rightHeal = document.getElementById("rightHeal");
let player1Name = document.getElementById("leftName");
let player2Name = document.getElementById("rightName");

let mewtwo = {
	hp: 50,
	attack: 10,
	heal: 5,
}

let pikachu = {
	hp: 50,
	attack: 10,
	heal: 5,
}

const hpBoxUpdateMewtwo = () => {
	rightHP.value = `${mewtwo.hp}`;
}

const hpBoxUpdatePikachu = () => {
	leftHP.value = `${pikachu.hp}`;
}

const names = () => {
	player1Name.textContent = prompt("Player 1 Name");
	player2Name.textContent = prompt("Player 2 Name");
	hpBoxUpdateMewtwo();
	hpBoxUpdatePikachu();
}
names();

let turn = true;
let pikachuBlock = false;
let mew2Block = false;

const pikaAttack = () => {
	if ( turn === true && mew2Block === false ) {
		mewtwo.hp = mewtwo.hp - pikachu.attack;
		turn = ! turn;
		hpBoxUpdateMewtwo();
	}
	else if ( turn === true && mew2Block === true ) {
		turn = ! turn;
		mew2Block = false;
	}
}

const pikaBlock = () => {
	if ( turn === true ) {
		pikachuBlock = ! pikachuBlock;
		turn = ! turn;
		mew2Block = false
	}
}

const pikaHeal = () => {
	if ( turn === true ) {
		pikachu.hp = pikachu.hp + pikachu.heal;
		turn = ! turn;
		hpBoxUpdatePikachu();
		mew2Block = false;
	}
}

const mewtwoAttack = () => {
	if ( turn === false && pikachuBlock === false ) {
		pikachu.hp = pikachu.hp - mewtwo.attack;
		turn = ! turn;
		hpBoxUpdatePikachu();
	}
	else if ( turn === false && pikachuBlock === true ) {
		turn = ! turn;
		pikachuBlock = false;
	}
}

const mewtwoBlock = () => {
	if ( turn === false ) {
		mew2Block = ! mew2Block;
		turn = ! turn;
		pikachuBlock = false;
	}
}

const mewtwoHeal = () => {
		if ( turn === false ) {
		mewtwo.hp = mewtwo.hp + mewtwo.heal;
		turn = ! turn;
		hpBoxUpdateMewtwo();
		pikachuBlock = false;
	}
}

leftAttack.addEventListener("click", pikaAttack);
leftBlock.addEventListener("click", pikaBlock);
leftHeal.addEventListener("click", pikaHeal);
rightAttack.addEventListener("click", mewtwoAttack);
rightBlock.addEventListener("click", mewtwoBlock);
rightHeal.addEventListener("click", mewtwoHeal);