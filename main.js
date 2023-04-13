let question = document.querySelector("#question");

let form = document.querySelector("form");
let score = document.querySelector("H3");
let scoreKeeper = [];
let gridContainer = document.querySelector("#gridContainer");

let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  let data = await rawJeopardyData.json();
  let groupData = _.groupBy(data, "value");

  
let blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.addEventListener("click", function (event) {
      let square = event.target;
      blocks.forEach((block) => {
        if (block !== square) {
           
            square.classList.add("used");
        }
      });
      square.classList.remove("grey")
      square.classList.add("used");;
    });
  });


  let oneHundo = groupData["$100"];
  let twoHundo = groupData["$200"];
  let fourHundo = groupData["$400"];
  let sixHundo = groupData["$600"];
  let eightHundo = groupData["$800"];

  gridContainer.addEventListener("click", function (event) {
    let square = event.target;
    if (square.classList.contains("hun")) {
      let greyed = document.querySelector(".hun")
      greyed.classList.add("block")
      question.innerText = "";
      let randomOne = oneHundo[random()];
      let oneQuestion = randomOne.question;
      let oneAnswer = randomOne.answer;
      console.log(oneAnswer);
      question.append(oneQuestion);
      const submitButton = form.querySelector('input[type="submit"]');

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = document.querySelector("#answer").value;
        square.classList.remove("grey")
        if (answer === oneAnswer) {
          form.reset();
         
          question.innerText = "Good Answer, You're Right";
          scoreKeeper.push(100);
          score.innerText = "Your Score is: $" + sumArray(scoreKeeper);
          square.classList.add("used");
        } else {
          question.innerText = "Wrong Answer, Try Again";
        }
      });
    } else if (square.classList.contains("two")) {
      question.innerText = "";
      let randomOne = twoHundo[random()];
      let oneQuestion = randomOne.question;
      let oneAnswer = randomOne.answer;
      console.log(oneAnswer);
      question.append(oneQuestion);
      const submitButton = form.querySelector('input[type="submit"]');

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = document.querySelector("#answer").value;

        if (answer === oneAnswer) {
          form.reset();
          question.innerText = "Good Answer, You're Right";
          scoreKeeper.push(200);
          score.innerText = "Your Score is: $" + sumArray(scoreKeeper);
        } else {
          question.innerText = "Wrong Answer, Try Again";
        }
      });
    } else if (square.classList.contains("four")) {
      question.innerText = "";
      let randomOne = fourHundo[random()];
      let oneQuestion = randomOne.question;
      let oneAnswer = randomOne.answer;
      console.log(oneAnswer);
      question.append(oneQuestion);
      const submitButton = form.querySelector('input[type="submit"]');

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = document.querySelector("#answer").value;

        if (answer === oneAnswer) {
          form.reset();
          question.innerText = "Good Answer, You're Right";
          scoreKeeper.push(400);
          score.innerText = "Your Score is: $" + sumArray(scoreKeeper);
        } else {
          question.innerText = "Wrong Answer, Try Again";
        }
      });
    } else if (square.classList.contains("six")) {
      question.innerText = "";
      let randomOne = sixHundo[random()];
      let oneQuestion = randomOne.question;
      let oneAnswer = randomOne.answer;
      console.log(oneAnswer);
      question.append(oneQuestion);
      const submitButton = form.querySelector('input[type="submit"]');

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = document.querySelector("#answer").value;

        if (answer === oneAnswer) {
          form.reset();
          question.innerText = "Good Answer, You're Right";
          scoreKeeper.push(600);
          score.innerText = "Your Score is: $" + sumArray(scoreKeeper);
        } else {
          question.innerText = "Wrong Answer, Try Again";
        }
      });
    } else if (square.classList.contains("eight")) {
      question.innerText = "";
      let randomOne = eightHundo[random()];
      let oneQuestion = randomOne.question;
      let oneAnswer = randomOne.answer;
      console.log(oneAnswer);
      question.append(oneQuestion);
      const submitButton = form.querySelector('input[type="submit"]');

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let answer = document.querySelector("#answer").value;

        if (answer === oneAnswer) {
          form.reset();
          question.innerText = "Good Answer, You're Right";
          scoreKeeper.push(800);
          score.innerText = "Your Score is: $" + sumArray(scoreKeeper);
        } else {
          question.innerText = "Wrong Answer, Try Again";
        }
      });
    }
  });
}
;

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
function random() {
  let randomIndex = Math.floor(Math.random() * 100);
  return randomIndex;
}




readJeopardyData();
