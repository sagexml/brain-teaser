function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.score = 0;
}

Quiz.prototype.returnRandomQuestion = function(min, max){
    var element =  Math.random() *(( max - min) + 2);
    return Math.ceil(element); 
 }
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}


Quiz.prototype.yourChoice = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)){
    this.score++;
}
    this.returnRandomQuestion(1,9) * (this.questionIndex++);
}

Quiz.prototype.endOfQuiz = function() {
    return this.questionIndex === this.questions.length;
}


 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
    return this.answer === choice;
}

 
 
function displayQuiz() {

    if (quiz.endOfQuiz()) {
        displayScores();
      
    }

    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
     
        //show options 
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0;  i <choices.length; i++){
        var element = document.getElementById("answer" + i);
        element.innerHTML = choices[i];
        
        yourChoice("btn" + i, choices[i]);
        
        }
        displayProgress();
    }
};

    function yourChoice(id, yourChoice){
        var button = document.getElementById(id);
        button.onclick = function (){
            quiz.yourChoice(yourChoice);
        displayQuiz();
        }
    };


function displayProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " +  quiz.questions.length;
}



function resultinPerc(){
    element = (quiz.score/quiz.questions.length) * 100 ;
    return Math.ceil(element);
}

var explanation = "<h3 id ='expheader'>Correct Answers</h3> <ol id='explanation' > <li> Football: All other sports requires holding something in hand" +
                " <li> 56398: No explanation needed " + "<li> 5: 1/5 of 200 is 40, 1/2 of 40 is 20, 1/4 of 20 is 5"  +
                  " <li> Suited : Check your fucking dictionary  " + "<li> Studying: Vaccine is the solution Virus, studying is the solution to exam" + 
                  " <li> Nephew: No explanation needed" + "<li> 1: Everyone has one birthday in a year" + "<li> 70:  30 divided by half is 60, not 15 " +
                  "<li> 60: one pill first, then another in the next 30 minutues, then the last one in the next 30 minutes. 60 minutes in total " +
                  "<li> Jane's Daughter: Jane's mother's husband is jane's father, his daughter is Jane, and Jill is her daughter." +
                  " <li> Simple: All other word comes in a consonant vowel trend, expect for simple" +
                  " <li> Unfortunately: No explanation needed" + " <li> Tuesday: No explanation needed" +
                  " <li>  Because 7 hates 9: 6 looks like 9 and seven hates 9, its only logical for 6 to be afraid of 7" +
                  "<li> Green: No explanation needed </ol>"

function displayScores(){
    header = "<h1 id=result> RESULT </h1>";
    header = header + "<h2 id = 'finalScore'> your final score is "   + quiz.score + " Out of " + quiz.questions.length + " </h2>";
    var element = document.getElementById("container");
    element.innerHTML = header + "<h1 id = 'resultpercent'> " + resultinPerc() + "%" + "</h1>" + explanation ;
    
}



// create questions here
var questions = [
    new Question("Which of the five is least like the other four? ", ["Baseball", "Badminton","Golf", "Football"], "Football"),
    new Question("OCEAN is to AENCO as 89653 is to?", ["85369", "56389", "56398", "65398"], "56398"),
    new Question("Pick the number that is 1/4 of 1/2 of 1/5 of 200", ["15", "5","10", "4"], "5"),
    new Question('Choose the word that is most similar to "Appropraite"', ["Impertinent", "Suited", "Relevant", "Likely"], "Suited"),
    new Question("Virus is to Vaccine as Exam is to:" ,["Trying", "Attempting", "Passing", "Studying"], "Studying"),
    new Question("What relation is your niece's brother to you?", ["Son", "Uncle","Nephew", "Cousin"], "Nephew"),
    new Question("How many birthdays does an average Nigerian man have?", ["1", "10", "59", "70"], "1"),
    new Question("Divide 30 by 1/2 and add 10. Whats your answer?", ["25", "10","50", "70"], "70"),
    new Question("A doctor gives you three pills telling you to take one every half hour. How many minutes will the pills last?", ["30", "90", "60", "120"], "60"),
    new Question("Jane went to visit Jill. Jill is Jane's only husband's mother-in-law's only husband's only daughter's only daughter. What relation is Jill to Jane?" ,
                 ["Jane's Daughter", "Jane's Cousin", "Jane's Niece", "Jane's Sister"], "Jane's Daughter"),
    new Question("Which logically is the one out?", ["dosage", "before","volume", "simple"], "simple"),
    new Question("Although, he did not enter the bank, he drove the getaway car, which makes him an accessory before the fact. One word has been removed from the passage above. Select the word"
                , ["possibly", "unfortunately","prime", "legally"], "unfortunately"),
    new Question("What day comes three days after the day which comes two days after the day which comes immediately after the day which comes two days after monday?", 
                 ["Monday", "Tuesday","Wednesday", "Saturday"], "Tuesday"),
     new Question("Why is six afraid of seven?", ["because 7 hates 9", "because 7 is higher than 6", "7 is an odd number", "7 is a prime number" ], "because 7 hates 9") , 
     new Question("Mr. A likes red colour, Mr. B likes red, white and blue colour, C likes white, green and blue colour, whereas D likes only green colour, which is the most liked colour?"
                  , ["White", "Blue", "Red", "Green" ], "Green")         
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
displayQuiz();
