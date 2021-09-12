/** QUIZ Logic */
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
        if (quizSection) {
            quizSection.innerHTML += questionTemplate;
        }
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

if (submitBtn) {
    submitBtn.addEventListener('click', calculateScore);
}
document.addEventListener('DOMContentLoaded', renderQuestions);


/** Is Triangle Logic */

const anglesValue = document.querySelector('#is-triangle');
const btnTriangle = document.querySelector('#btn-submit-triangle');
const triangleOutput = document.querySelector('#output-triangle');

const checkIfTriangle = (e) => {
    
    e.preventDefault();
    
    const angle1 = Number(document.querySelector('#angle1').value);
    const angle2 = Number(document.querySelector('#angle2').value);
    const angle3 = Number(document.querySelector('#angle3').value);
    
    if (angle1 + angle2 + angle3 === 180) {
        triangleOutput.innerHTML = "<h1>Yay, the angles form a triangle!</h1>";
    } else if(!angle1 || !angle2 || !angle3) {
        triangleOutput.innerHTML = "<h1>Please enter all the fields!</h1>"
    } else {
        triangleOutput.innerHTML = "<h1>Oh Oh! The angle doesn't form a triangle</h1>";
    }
}

if (btnTriangle) {
    btnTriangle.addEventListener('click', checkIfTriangle);
}
