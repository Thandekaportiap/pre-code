const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")

const questionContainerElement = documet.getElementById('question-container')
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answe-buttons")

let shuffledQuestions,currentQuestionindex;
let quizScore = 0;

function showQuestion(question){
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button= document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if( answer.correct){
            button.dataset.correct = answer.corrects
        }
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else {
        startButton.innerText ="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById('right-answers').innerText=quizScore
}

function setStatusClass(element,corrent) {
    clearstatusclass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}

function clearstatusclass(element){
element.class.remove('correct')
element.classlist.remove('wrong')
}
const questions =[
    {
        question: 'which of these is a Javascript framework?',
        answers :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false}
        ],
    },
    {
        question: 'who is the prime minister of india?',
        answers :[
            {text: 'Narendra Modi', correct: true},
            {text: 'Rahul Gandhi', correct: false},
        ],  
    },
    {
        question: 'what is 4*37?',
        answers: [
            {text: '6', correct: false},
            {text: '12', correct: false},
        ]
    }
]