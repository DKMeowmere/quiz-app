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
const categoryContainer = document.querySelector("#category-container");
const questionsTimeOut = 2000;
//each category
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
			true: true,
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
			true: false,
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
			true: true,
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
			true: false,
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
	[
		(anwser = {
			anwser: "Norwegia",
			true: false,
		}),
		(anwser = {
			anwser: "Finlandia",
			true: true,
		}),
		(anwser = {
			anwser: "Islandia",
			true: false,
		}),
		(anwser = {
			anwser: "Dania",
			true: false,
		}),
		(question = "Do krajów skandynawskich nie należy"),
	],
];
const norseQuestions = [
	[
		(anwser = {
			anwser: "Florydy",
			true: true,
		}),
		(anwser = {
			anwser: "Islandii",
			true: false,
		}),
		(anwser = {
			anwser: "Grendandii",
			true: false,
		}),
		(anwser = {
			anwser: "Nowej Funlandii",
			true: false,
		}),
		(question = "Wikingowie nie dopłyneli do:"),
	],

	[
		(anwser = {
			anwser: "Przez szczury",
			true: true,
		}),
		(anwser = {
			anwser: "W walce",
			true: false,
		}),
		(anwser = {
			anwser: "Przez tortury",
			true: false,
		}),
		(anwser = {
			anwser: "Przez Jadowite węże",
			true: true,
		}),
		(question = "Jak zginął Ragnar Lotbrok:"),
	],
];
//categories list
const categories = [
	{
		name: "Geografia",
		variableName: geographyQuestions,
	},
	{
		name: "Wikingowie i mitologia nordycka",
		variableName: norseQuestions,
	},
];
let userCategory = "";
let questionNumber = 0;
let randomQuestionNumber;

window.onload = startGameFunction();

function startGameFunction() {
	//disable start btn
	startGameBtn.style.cursor = "not-allowed";
	let selectedCategory = false;

	//create category button for each category
	categories.forEach((category) => {
		const categoryDescripton = document.createTextNode(category.name);
		const div = document.createElement("div");
		div.classList.add("category");
		div.appendChild(categoryDescripton);
		categoryContainer.appendChild(div);

		//change color to clicked div and clear for all divs
		div.addEventListener("click", () => {
			const categoryBtns = document.querySelectorAll(".category");
			categoryBtns.forEach((btn) => (btn.style.backgroundColor = ""));
			div.style.backgroundColor = "#ccc";

			//set category
			userCategory = category.variableName;

			//enable start btn
			startGameBtn.style.cursor = "pointer";
			selectedCategory = true;

			//create random number and change variable globally
			let randomNumber = Math.floor(Math.random() * userCategory.length);
			randomQuestionNumber = randomNumber;
		});
	});

	startGameBtn.addEventListener("click", () => {
		if (selectedCategory) {
			startGame.style.display = "none";
			insertQuestions(randomQuestionNumber);
		}
	});
	//add click event for every anwser
	anwsers.forEach((anwser) => {
		anwser.addEventListener("click", () => checkTrueAnwser(anwser));
	});
}

function insertQuestions(randomQuestionNumber) {
	if (userCategory.length === 0) {
		endOfQuestionsDiv.style.display = "flex";
		scoreDisplay.innerText = ` Twój wynik: ${score}`;
		return;
	}

	questionNumber++;
	questionTest.innerText = `Pytanie ${questionNumber}: ${userCategory[randomQuestionNumber][4]}`;
	anwserA.innerText = `A: ${userCategory[randomQuestionNumber][0].anwser}`;
	anwserB.innerText = `B: ${userCategory[randomQuestionNumber][1].anwser}`;
	anwserC.innerText = `C: ${userCategory[randomQuestionNumber][2].anwser}`;
	anwserD.innerText = `D: ${userCategory[randomQuestionNumber][3].anwser}`;
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

	if (userCategory[randomQuestionNumber][clickedBtn].true === true) {
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
	userCategory.splice(randomQuestionNumber, 1);

	setTimeout(() => {
		randomQuestionNumber = Math.floor(Math.random() * userCategory.length);
		insertQuestions(randomQuestionNumber);
	}, questionsTimeOut);
}

reloadBtn.addEventListener("click", () => window.location.reload(true));