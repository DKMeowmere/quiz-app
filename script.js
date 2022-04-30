const questionTest = document.querySelector("#question-text");
const anwsers = document.querySelectorAll(".anwser");
const anwserA = document.querySelector("#anwser-a");
const anwserB = document.querySelector("#anwser-b");
const anwserC = document.querySelector("#anwser-c");
const anwserD = document.querySelector("#anwser-d");
const endOfQuestionsDiv = document.querySelector("#question-ended");
const reloadBtn = document.querySelector("#reload-btn");
const startGame = document.querySelector("#start-game");
const startGameBtn = document.querySelector("#start-game-btn");
const scoreDisplay = document.querySelector("#score-display");
const questionsTimeOut = 2000;
const geographyQuestions = [
	[
		(anwser = {
			anwser: "Montana",
			true: true,
		}),
		(anwser = {
			anwser: "Oregon",
			true: false,
		}),
		(anwser = {
			anwser: "California",
			true: false,
		}),
		(anwser = {
			anwser: "North Dakota",
			true: false,
		}),
		(question = "4 pod względem wielkości stan USA to:"),
	],

	[
		(anwser = {
			anwser: "1",
			true: false,
		}),
		(anwser = {
			anwser: "2",
			true: true,
		}),
		(anwser = {
			anwser: "3",
			true: false,
		}),
		(anwser = {
			anwser: "4",
			true: false,
		}),
		(question = 'Liczba państw "double landlocked" to:'),
	],

	[
		(anwser = {
			anwser: "Papua Nowa Gwinea",
			true: false,
		}),
		(anwser = {
			anwser: "Szwecja",
			true: false,
		}),
		(anwser = {
			anwser: "Paragwaj",
			true: false,
		}),
		(anwser = {
			anwser: "Jemen",
			true: true,
		}),
		(question = "Największe z tych państw to:"),
	],

    [
		(anwser = {
			anwser: "0",
			true: false,
		}),
		(anwser = {
			anwser: "2",
			true: false,
		}),
		(anwser = {
			anwser: "3",
			true: true,
		}),
		(anwser = {
			anwser: "5",
			true: false,
		}),
		(question = "Liczba państw z którymi graniczy Togo to:"),
	],

	[
		(anwser = {
			anwser: "Sudanu Południowego",
			true: true,
		}),
		(anwser = {
			anwser: "Czadu",
			true: false,
		}),
		(anwser = {
			anwser: "Beninu",
			true: false,
		}),
		(anwser = {
			anwser: "Somalii",
			true: false,
		}),
		(question = "Dżuba to stolica:"),
	],

	[
		(anwser = {
			anwser: "Irlandii",
			true: false,
		}),
		(anwser = {
			anwser: "Anglii",
			true: true,
		}),
		(anwser = {
			anwser: "Szkocji",
			true: false,
		}),
		(anwser = {
			anwser: "Walii",
			true: false,
		}),
		(question = "Białe klify Dover znajdują się w:"),
	],

	[
		(anwser = {
			anwser: "350 545 km²",
			true: false,
		}),
		(anwser = {
			anwser: "410 451 km²",
			true: false,
		}),
		(anwser = {
			anwser: "312 780 km²",
			true: false,
		}),
		(anwser = {
			anwser: "298 128 km²",
			true: true,
		}),
		(question = "Powierzchnia Alp to:"),
	],

	[
		(anwser = {
			anwser: "Monako",
			true: false,
		}),
		(anwser = {
			anwser: "Portugalii",
			true: false,
		}),
		(anwser = {
			anwser: "Andory",
			true: true,
		}),
		(anwser = {
			anwser: "Hiszpanii",
			true: false,
		}),
		(question = "Język kataloński to oficjalny język:"),
	],

	[
		(anwser = {
			anwser: "Irlandia",
			true: false,
		}),
		(anwser = {
			anwser: "Islandia",
			true:  true,
		}),
		(anwser = {
			anwser: "Nowa Szkocja",
			true: false,
		}),
		(anwser = {
			anwser: "Cejlon",
			true: false,
		}),
		(question = "Największa z tych wysp to:"),
	],

	[
		(anwser = {
			anwser: "Azji",
			true: false,
		}),
		(anwser = {
			anwser: "Afryce",
			true:  false,
		}),
		(anwser = {
			anwser: "Ameryce Północnej",
			true: false,
		}),
		(anwser = {
			anwser: "Ameryce Południowej",
			true: true,
		}),
		(question = "Patagonia to region w:"),
	],

	[
		(anwser = {
			anwser: "Luksemburgiem",
			true: false,
		}),
		(anwser = {
			anwser: "Holandią",
			true:  true,
		}),
		(anwser = {
			anwser: "Belgią",
			true: false,
		}),
		(anwser = {
			anwser: "Szwajcarią",
			true: false,
		}),
		(question = "Francja nie graniczy z:"),
	],

	[
		(anwser = {
			anwser: "33",
			true: false,
		}),
		(anwser = {
			anwser: "41",
			true:  false,
		}),
		(anwser = {
			anwser: "48",
			true: false,
		}),
		(anwser = {
			anwser: "50",
			true: true,
		}),
		(question = "USA skała się z ? stanów."),
	],
];

let questionNumber = 0;

let randomQuestionNumber = Math.floor(Math.random() * geographyQuestions.length);

window.onload = startGameFunction();

function startGameFunction() {
	startGameBtn.addEventListener("click", () => (startGame.style.display = "none"));
	anwsers.forEach((anwser) => {
		anwser.addEventListener("click", () => checkTrueAnwser(anwser));
	});

	insertQuestions(randomQuestionNumber);
}

function insertQuestions(randomQuestionNumber) {
	if (geographyQuestions.length === 0) {
		endOfQuestionsDiv.style.display = "flex";
        scoreDisplay.innerText = ` Twój wynik: ${score}`
		return;
	}

	questionNumber++;
	questionTest.innerText = `Pytanie ${questionNumber}: ${geographyQuestions[randomQuestionNumber][4]}`;
	anwserA.innerText = `A: ${geographyQuestions[randomQuestionNumber][0].anwser}`;
	anwserB.innerText = `B: ${geographyQuestions[randomQuestionNumber][1].anwser}`;
	anwserC.innerText = `C: ${geographyQuestions[randomQuestionNumber][2].anwser}`;
	anwserD.innerText = `D: ${geographyQuestions[randomQuestionNumber][3].anwser}`;
}
let disableClicking;
let score = 0;
function checkTrueAnwser(anwser) {
	if (disableClicking === true) return;
	disableClicking = true;

	setTimeout(() => {
		disableClicking = false;
	}, questionsTimeOut);

	let clikedBtn = "";

	if (anwser.id === "anwser-a") clickedBtn = 0;
	if (anwser.id === "anwser-b") clickedBtn = 1;
	if (anwser.id === "anwser-c") clickedBtn = 2;
	if (anwser.id === "anwser-d") clickedBtn = 3;

	if (geographyQuestions[randomQuestionNumber][clickedBtn].true === true) {
		anwser.style.backgroundColor = "#0f0";
		score++;

		setTimeout(() => {
			anwser.style.backgroundColor = "";
		}, questionsTimeOut);
	} else {
		anwser.style.backgroundColor = "#f00";

		setTimeout(() => {
			anwser.style.backgroundColor = "";
		}, questionsTimeOut);
	}
	// remove current question from array
	geographyQuestions.splice(randomQuestionNumber, 1);

	setTimeout(() => {
		randomQuestionNumber = Math.floor(Math.random() * geographyQuestions.length);
		insertQuestions(randomQuestionNumber);
	}, questionsTimeOut);
}

reloadBtn.addEventListener("click", () => window.location.reload(true));
