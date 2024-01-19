// Dummy questions
const questions = [
  {
    question: "What is the capital city of Nigeria?",
    answers: ["Lagos", "Abuja", "Enugu", "Portharcourt"],
    correct: 1
  },

  {
    question: "What is the capital city of South Africa?",
    answers: ["Nairobi", "Cape Town", "Enugu", "Johannesburg"],
    correct: 1
  },

  {
    question: "Who is the invented JavaScript, and in what year?",
    answers: ["Dave Gray in 2000", "Mark Zuckerberg in 1996", "Brendan Eich in 1995", "Net Ninja in 1990"],
    correct: 2
  },

  {
    question: "Who is the CEO of google?",
    answers: ["Sundar Pichai", "Larry Page", "Sergey Brin", "Esther Kings"],
    correct: 0
  },

  {
    question: "Who is the first person to create computer?",
    answers: ["Charles Babbage", "Elon Musk", "Ayodele Aransiola", "Ada Lovelace"],
    correct: 0
  },

  {
    question: "Who are the founders of microsoft?",
    answers: ["Mark Zuckerberg and Steve Robinson", "Bill Gates and Paul Allen", "Gloria Peters and Elon Musk", "Abraham Fisher and Adam Peaches"],
    correct: 1
  },

  {
    question: "who is the founders of apple?",
    answers: ["Steve Jobs, Steve Wozniak, and Ronald Wayne", "Ryan Adams, Christian Grey, and Daniel Rutherford", "Steve Jobs, Ronald Wozniak, and Tim Cook", "Jeff Bezos, Bill Gates, and Jony Ive"],
    correct: 0
  },

  {
    question: "Who is the CEO of Apple?",
    answers: ["Sundar Pichai", "Jony Ive", "Jeff Bezos", "Tim Cook"],
    correct: 3
  },

  {
    question: "Who is the CEO of Amazon?",
    answers: ["Andy Jassy", "Adam Selipsky", "Werner Vogels", "Warren Buffett"],
    correct: 0
  },

  {
    question: "Who is CEO of Hewlett Packard (HP)?",
    answers: ["Bill Hewlett", "Charles V. Bergh", "Enrique Lores", "David Packard"],
    correct: 2
  }

]

let currQuestion = 0;
let score = 0;

function displayQuestion() {
  // get the element of question and assign it to the questions in the array
  document.getElementById('question').innerText = questions[currQuestion].question

 
  // we get the answers the array and assign it to variable.
  const answers = questions[currQuestion].answers

  //display current question number and remaining question
  // function dispCurrQuestion() {
  //   let count = currQuestion + 1;

  //   document.getElementById('current').innerText = `Question ${count} out of ${questions.length}`;

  //   // for (count = 0; count <= questions.length; count++) {
  //   //   if (currQuestion === count) {
  //   //     document.getElementById('current').innerText = `Question ${count} out of ${questions.length}`;
  //   //     countNum++;
  //   //   }
      
  //   // }
    
  }

  dispCurrQuestion();

  //iterate the answers array and get the value and index to display on the options div

  const answerOptions = answers.map((answers, index) =>  
    `<button class="option" onclick=selectAnswer(${index})>${answers}</button>`
  ).join('');

  // Assign the map item(answerOptions) into the div of options
  document.getElementById('option').innerHTML = answerOptions 
}
;

// check if the selected options is correct and enable 
// button to go to the next question and score the user
// if correct
function selectAnswer(index) {
  if (index === questions[currQuestion].correct){
    score++;
  }
  document.getElementById('next').disabled = false;
}

// go to the button and if the questions is finished 
// display result
document.getElementById('next').addEventListener('click', () => {
  currQuestion++;

  if (currQuestion < questions.length) {
    displayQuestion();
    document.getElementById('next').disabled = true;
  } else {
    document.getElementById('result').innerHTML = `<p>Your total Score is: ${score}/${questions.length}</p>`
  }
});

// calling display questions function

displayQuestion();
