const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const q = document.getElementById("question")

let currentQuestion = 0;
let score = 0;
let progress = 0;
let progressNo = 0;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee"
  },
  {
    question: "Which language is used for web page styling?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "CSS"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "define"],
    answer: "var"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "India"],
    answer: "Japan"
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Albert Einstein"
    ],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Ganges"],
    answer: "Nile"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    answer: "Mars"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Tiger", "Elephant", "Peacock"],
    answer: "Tiger"
  },
  {
    question: "Which company created the React library?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which data type is used for true or false values in JavaScript?",
    options: ["String", "Number", "Boolean", "Array"],
    answer: "Boolean"
  },
  {
    question: "Which method is used to print output in the browser console?",
    options: [
      "console.print()",
      "console.show()",
      "console.log()",
      "print.console()"
    ],
    answer: "console.log()"
  }
];

const updatQuestion = () => {
    q.textContent = questions[currentQuestion].question;
    a.textContent = questions[currentQuestion].options[0]
    b.textContent = questions[currentQuestion].options[1]
    c.textContent = questions[currentQuestion].options[2]
    d.textContent = questions[currentQuestion].options[3]

  }
nextBtn.addEventListener("click" , () =>{
  if (currentQuestion < questions.length) {
   updatQuestion();
   currentQuestion++;
    
   

}
})

