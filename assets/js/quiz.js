/* code from sitepoint */
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "Which is most important to you in a secondhand store?",
    answers: {
      a: "Good value with low prices",
      b: "Designer brands and/or not having to search through lots of merchandise in not-so-great condition",
    },
    correctAnswer: "a"
  },
  {
    question: "What kinds of things are you looking for when you shop secondhand?",
    answers: {
      a: "One-of-a-kind vintage pieces",
      b: "Clothes and household items from relatively recent years",
    },
    correctAnswer: "b"
  },
  {
    question: "Do you prefer to stay in Stockholm's inner city or are you up for shopping outside the city?",
    answers: {
      a: "I prefer to stay in the city.",
      b: "I'm game for an adventure!",
    },
    correctAnswer: "a"
  },
  {
    question: "How important is it to you where your profits go when you go thrift shopping?",
    answers: {
      a: "Very - I want to support a good cause.",
      b: "I'm already helping to save the planet by buying secondhand - I just want some nice threads.",
    },
    correctAnswer: "b"
  }
];

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});

// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

myQuestions.forEach( (currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});

// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');


