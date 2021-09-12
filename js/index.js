import {quiz} from './data.js';
const quizSection = document.querySelector('#questions');
const submitBtn = document.querySelector('#btn-submit');

console.log(quiz);

const renderQuestions = () => {

    quiz.forEach((item, i) => {

        const uniqueItem0 = `${item.o[0].split(" ").join("")}`;
        const uniqueItem1 = `${item.o[1].split(" ").join("")}`;
        const uniqueItem2 = `${item.o[2].split(" ").join("")}`;
        const questionTemplate = `<div class="each-question">
                                    <p>${item.q}</p>
                                    <input type="radio" name=${i}  value=${uniqueItem0}>
                                    <label for=${uniqueItem0}>${uniqueItem0}</label>
                                    <input type="radio" name=${i}  value=${uniqueItem1}>
                                    <label for=${uniqueItem1}>${uniqueItem1}</label>
                                    <input type="radio" name=${i}  value=${uniqueItem2}>
                                    <label for=${uniqueItem2}>${uniqueItem2}</label>
                                  </div>`;  
        quizSection.innerHTML += questionTemplate;
    })
    
}


console.log(quizSection);

document.addEventListener('DOMContentLoaded', renderQuestions);