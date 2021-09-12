import {quiz} from './data.js';

const quizSection = document.querySelector('#questions');
const submitBtn = document.querySelector('#btn-submit-quiz');
const outputResult = document.querySelector('#output-result');

const renderQuestions = () => {

    quiz.forEach((item, i) => {

        const uniqueItem0 = `${item.o[0].split(" ").join("")}`;
        const uniqueItem1 = `${item.o[1].split(" ").join("")}`;
        const uniqueItem2 = `${item.o[2].split(" ").join("")}`;

        //template for questions
        const questionTemplate = `<div class="each-question">
                                    <p>${item.q}</p>
                                    <input type="radio" name=${i}  value=${uniqueItem0}>
                                    <label for=${uniqueItem0}>${uniqueItem0}</label>
                                    <input type="radio" name=${i}  value=${uniqueItem1}>
                                    <label for=${uniqueItem1}>${uniqueItem1}</label>
                                    <input type="radio" name=${i}  value=${uniqueItem2}>
                                    <label for=${uniqueItem2}>${uniqueItem2}</label>
                                  </div>`; 
        // rendering questions and answers
        quizSection.innerHTML += questionTemplate;
    })

}

const calculateScore = () => {
    let score = 0;
    let answerArrays = [];

    // extracting correct answers from data
    const correctAnswers = quiz.map((item, i) => {
        return [i.toString(),item.a];
    })
    
    // converting list of correct answers to object
    const objectOfCorrectAnswers = Object.fromEntries(correctAnswers);
    console.log(objectOfCorrectAnswers);

    // collecting user answers from form
    const formData = new FormData(quizSection);

    // extracting user selected answers
    for (let answer of formData.entries()) {
        answerArrays.push(answer);
    }

    // converting answer array to object
    const answerObject = Object.fromEntries(answerArrays);
    console.log(answerObject);

    // calculating score
    for (let answer in answerObject) {
        if (objectOfCorrectAnswers[answer] === answerObject[answer]) {
            score++;
        }
    }
    outputResult.innerHTML = `<h2>Your score is ${score}</h2>`
}

submitBtn.addEventListener('click', calculateScore);
document.addEventListener('DOMContentLoaded', renderQuestions);