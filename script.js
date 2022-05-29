const questionTest = document.querySelector("#question-text")
const anwsers = document.querySelectorAll(".anwser")
const anwserA = document.querySelector("#anwser-a")
const anwserB = document.querySelector("#anwser-b")
const anwserC = document.querySelector("#anwser-c")
const anwserD = document.querySelector("#anwser-d")
const endOfQuestionsDiv = document.querySelector("#question-ended")
const reloadBtn = document.querySelector("#reload-btn")
const startGame = document.querySelector("#start-game")
const startGameBtn = document.querySelector("#start-game-btn")
const scoreDisplay = document.querySelector("#score-display")
const categoryContainer = document.querySelector("#category-container")
const loadingContainer = document.querySelector("#loading-container")
const container = document.querySelector("#container")
const questionsTimeOut = 2000

//? each category
const geographyQuestions = []
const norseQuestions = []

//? categories list
const categories = [
	{
		name: "Geografia",
		variableName: geographyQuestions,
		path: "./questions/geography_questions.json",
	},
	{
		name: "Wikingowie i mitologia nordycka",
		variableName: norseQuestions,
		path: "./questions/norse_questions.json",
	},
]

let fetchedCategories = 0
categories.forEach(category => {
	fetch(category.path)
		.then(response => response.json())
		.then(data => {
			for (let i = 0; i <= data.length - 1; i++) {
				category.variableName.push(data[i])
			}
		})
		.then(() => {
			fetchedCategories++
			if (fetchedCategories === categories.length) {
				startGame.style.display = "flex"
				loadingContainer.style.display = "none"
			}
		})
})

let userCategory = ""
let questionNumber = 0
let randomQuestionNumber

window.onload = startGameFunction()

function startGameFunction() {
	//disable start btn
	startGameBtn.style.cursor = "not-allowed"
	let selectedCategory = false

	//create category button for each category
	categories.forEach(category => {
		const categoryDescripton = document.createTextNode(category.name)
		const div = document.createElement("div")
		div.classList.add("category")
		div.appendChild(categoryDescripton)
		categoryContainer.appendChild(div)

		//change color to clicked div and clear for all divs
		div.addEventListener("click", () => {
			const categoryBtns = document.querySelectorAll(".category")
			categoryBtns.forEach(btn => (btn.style.backgroundColor = ""))
			div.style.backgroundColor = "#ccc"

			//set category
			userCategory = category.variableName

			//enable start btn
			startGameBtn.style.cursor = "pointer"
			selectedCategory = true

			//create random number and change variable globally
			let randomNumber = Math.floor(Math.random() * userCategory.length)
			randomQuestionNumber = randomNumber
		})
	})

	startGameBtn.addEventListener("click", () => {
		if (selectedCategory) {
			container.style.display = "flex"
			startGame.style.display = "none"

			insertQuestions(randomQuestionNumber)
		}
	})
	//add click event for every anwser
	anwsers.forEach(anwser => {
		anwser.addEventListener("click", () => checkTrueAnwser(anwser))
	})
}

function insertQuestions(randomQuestionNumber) {
	if (userCategory.length === 0) {
		endOfQuestionsDiv.style.display = "flex"
		scoreDisplay.innerText = ` Twój wynik: ${score}`
		return
	}

	questionNumber++
	questionTest.innerText = `Pytanie ${questionNumber}: ${userCategory[randomQuestionNumber][4]}`
	//remove question from array
	console.log(userCategory[randomQuestionNumber][4])
	userCategory[randomQuestionNumber].splice(4, 1)
	console.log(userCategory[randomQuestionNumber][4])

	//shuffle items in array
	shuffle(userCategory[randomQuestionNumber])

	anwserA.innerText = `A: ${userCategory[randomQuestionNumber][0].anwser}`
	anwserB.innerText = `B: ${userCategory[randomQuestionNumber][1].anwser}`
	anwserC.innerText = `C: ${userCategory[randomQuestionNumber][2].anwser}`
	anwserD.innerText = `D: ${userCategory[randomQuestionNumber][3].anwser}`
}
let disableClicking
let score = 0
function checkTrueAnwser(anwser) {
	if (disableClicking === true) return
	disableClicking = true

	setTimeout(() => {
		disableClicking = false
	}, questionsTimeOut)

	let clikedBtn = ""

	if (anwser.id === "anwser-a") clickedBtn = 0
	if (anwser.id === "anwser-b") clickedBtn = 1
	if (anwser.id === "anwser-c") clickedBtn = 2
	if (anwser.id === "anwser-d") clickedBtn = 3

	if (userCategory[randomQuestionNumber][clickedBtn].true === true) {
		anwser.style.backgroundColor = "#0f0"
		score++

		setTimeout(() => {
			anwser.style.backgroundColor = ""
		}, questionsTimeOut)
	} else {
		anwser.style.backgroundColor = "#f00"

		setTimeout(() => {
			anwser.style.backgroundColor = ""
		}, questionsTimeOut)
	}
	// remove current question from array
	userCategory.splice(randomQuestionNumber, 1)

	setTimeout(() => {
		randomQuestionNumber = Math.floor(Math.random() * userCategory.length)
		insertQuestions(randomQuestionNumber)
	}, questionsTimeOut)
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
	}

	return array
}

reloadBtn.addEventListener("click", () => location.reload())
