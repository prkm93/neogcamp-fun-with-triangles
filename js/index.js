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
    if (score <4) {
        outputResult.innerHTML = `<h2 class="error">Your score is ${score}</h2>`;
    } else {
        outputResult.innerHTML = `<h2 class="success">Your score is ${score}</h2>`
    }
    
}

if (submitBtn) {
    submitBtn.addEventListener('click', calculateScore);
}
document.addEventListener('DOMContentLoaded', renderQuestions);


/** Is Triangle Logic */

const btnTriangle = document.querySelector('#btn-submit-triangle');
const triangleOutput = document.querySelector('#output-triangle');

const checkIfTriangle = (e) => {
    
    e.preventDefault();
    
    const angle1 = Number(document.querySelector('#angle1').value);
    const angle2 = Number(document.querySelector('#angle2').value);
    const angle3 = Number(document.querySelector('#angle3').value);
    
    if (angle1 + angle2 + angle3 === 180) {
        triangleOutput.innerHTML = "<h1 class='success'>Yay, the angles form a triangle!</h1>";
    } else if(!angle1 || !angle2 || !angle3) {
        triangleOutput.innerHTML = "<h1 class='error'>Please enter all the fields!</h1>"
    } else {
        triangleOutput.innerHTML = "<h1 class='error'>Oh Oh! The angle doesn't form a triangle</h1>";
    }
}

if (btnTriangle) {
    btnTriangle.addEventListener('click', checkIfTriangle);
}


/** Calculate Hypotenuse Logic */

const btnHypotenuse = document.querySelector('#btn-submit-hypo');
const outputHypotenuse = document.querySelector('#output-hypotenuse');

const calculateHypotenuse = (e) => {
    e.preventDefault();

    const base = Number(document.querySelector('#base').value);
    const height = Number(document.querySelector('#height').value);

    console.log(base);
    console.log(height);

    if (!base || !height) {
        outputHypotenuse.innerHTML = `<h2 class="error">Please enter both the fields</h2>`;
    } else {
        const hypotenuse = Math.sqrt((base*base) + (height*height)).toFixed(2);
        outputHypotenuse.innerHTML = `<h2 class="success">The length of hypotenuse is ${hypotenuse}</h2>`;
    }
}

if (btnHypotenuse) {
    btnHypotenuse.addEventListener('click', calculateHypotenuse);
}

/** Calculate area logic */

const btnArea = document.querySelector('#btn-submit-area');
const outputArea = document.querySelector("#output-area");

const calculateArea= (e) => {
    e.preventDefault();

    const side1 = Number(document.querySelector('#side1').value);
    const side2 = Number(document.querySelector('#side2').value); 
    const side3 = Number(document.querySelector('#side3').value);

    if (!side1 || !side2 || !side3) {
        outputArea.innerHTML = `<h2 class="error">Please enter all the fields</h2>`;
    } else {
        const s = (side1 + side2 + side3)/2;
        const area = Math.sqrt(s *(s - side1) *(s - side2) * (s - side3)).toFixed(2);
        outputArea.innerHTML = `<h2 class="success">The area of triangle is ${area}</h2>`;
    }
}

if (btnArea) {
    btnArea.addEventListener('click', calculateArea);
}