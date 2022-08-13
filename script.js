//Attach document.getElementById to startButton
const startButton =  document.getElementById('start-btn')
const nextButton =  document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//used for randomizing questions
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
  console.log('Started')
  //adds a class to startButton, startButton is document.getElementById('start-btn')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide') 
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide'),
    window.alert('Great Job!')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//the info setNextQuestion grabs. as array
const questions = [
    {
        question: 'What is 22 + 21',
        answers: [
            {text: '29', correct: false},
            {text: '42', correct: false},
            {text: '43', correct: true},
            {text: '61', correct: false}
        ]
    },
    {
        question: 'What is 13 + 3',
        answers: [
            {text: '15', correct: false},
            {text: '16', correct: true},
            {text: '18', correct: false},
            {text: '19', correct: false}
        ]
    },
    {
        question: 'What is 14 + 4',
        answers: [
            {text: '18', correct: true},
            {text: '19', correct: false},
            {text: '21', correct: false},
            {text: '23', correct: false}
        ]
    },
    {
        question: 'What is 6 + 5',
        answers: [
            {text: '7', correct: false},
            {text: '8', correct: false},
            {text: '10', correct: false},
            {text: '11', correct: true}
            
        ]
    },
    {
        question: 'What is 9 + 3',
        answers: [
            {text: '9', correct: false},
            {text: '12', correct: true},
            {text: '13', correct: false},
            {text: '14', correct: false}
        ]
    },
    {
        question: 'What is 16 + 17',
        answers: [
            {text: '30', correct: false},
            {text: '31', correct: false},
            {text: '33', correct: true},
            {text: '35', correct: false}
        ]
    },

    {
        question: 'What is 5 X 5',
        answers: [
            {text: '19', correct: false},
            {text: '20', correct: false},
            {text: '25', correct: true},
            {text: '27', correct: false}
        ]
    },
    {
        question: 'What is 6 X 5',
        answers: [
            {text: '20', correct: false},
            {text: '25', correct: false},
            {text: '30', correct: true},
            {text: '32', correct: false}
        ]
    },

    {
        question: 'What is 3 X 3',
        answers: [
            {text: '9', correct: true},
            {text: '10', correct: false},
            {text: '11', correct: false},
            {text: '13', correct: false}
        ]
    },
    {
        question: 'What is 10 X 3',
        answers: [
            {text: '30', correct: true},
            {text: '35', correct: false},
            {text: '40', correct: false},
            {text: '300', correct: false}
        ]
    },

    {
        question: 'What is 3 X 8',
        answers: [
            
            {text: '17', correct: false},
            {text: '19', correct: false},
            {text: '20', correct: false},
            {text: '22', correct: true}
        ]
    },
    {
        question: 'What is 3 X 9',
        answers: [
            
            {text: '18', correct: false},
            {text: '27', correct: true},
            {text: '29', correct: false},
            {text: '31', correct: false}
        ]
    },

    {
        question: 'What is 10 X 5',
        answers: [
            {text: '30', correct: false},
            {text: '40', correct: false},
            {text: '50', correct: true},
            {text: '55', correct: false}
        ]
    },

    {
        question: 'What is 5 X 8',
        answers: [
            
            {text: '20', correct: false},
            {text: '25', correct: false},
            {text: '35', correct: false},
            {text: '40', correct: true}
        ]
    },
    {
        question: 'What is 5 X 9',
        answers: [
            
            {text: '39', correct: false},
            {text: '45', correct: true},
            {text: '47', correct: false},
            {text: '49', correct: false}
        ]
    },
    {
        question: 'What is 10 X 8',
        answers: [
            
            {text: '8', correct: false},
            {text: '10', correct: false},
            {text: '78', correct: false},
            {text: '80', correct: true}
        ]
    },
    {
        question: 'What is 9 X 9',
        answers: [
            
            {text: '79', correct: false},
            {text: '81', correct: true},
            {text: '83', correct: false},
            {text: '89', correct: false}
        ]
    },
    {
        question: 'What is 4 X 7',
        answers: [
            
            {text: '25', correct: false},
            {text: '27', correct: false},
            {text: '28', correct: true},
            {text: '30', correct: false}
        ]
    },
    {
        question: 'What is 6 X 7',
        answers: [
            
            {text: '39', correct: false},
            {text: '41', correct: false},
            {text: '42', correct: true},
            {text: '44', correct: false}
        ]
    },

]
