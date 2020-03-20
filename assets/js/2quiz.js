

//code from jsfiddle.net
var questions = [{
    question: "Which is most important to you in a secondhand store?",
        choices: ["Great value with low prices", "Not having to search through lots of merchandise in not-so-great condition and maybe even some designer brands"],
    correctAnswer: 1
}, {
      question: "What kinds of things are you looking for when you shop secondhand?",
        choices: ["One-of-a-kind vintage pieces", "Clothes and household items from relatively recent years"],
    correctAnswer: 0
}, {
    question: "Do you prefer to stay in Stockholm's inner city or are you up for shopping outside the city?",
        choices: ["I prefer to stay in the city.", "I'm game for an adventure!"],
    correctAnswer: 1
}, {
      question: "How important is it to you where your profits go when you go thrift shopping?",
        choices: ["Very - I want to support a good cause.", "I'm already helping to save the planet by buying secondhand - I just want some nice threads."],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                },

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                }, else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                },
            },
        }, else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        },
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    },
},

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
},

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
},

function hideScore() {
    $(document).find(".result").hide();
}