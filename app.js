let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
let userPara = document.querySelector("#user-score");
let compPara = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let drawGame = () =>{
    msg.innerText = "It's a draw";
    msg.style.backgroundColor = "#081b31";
}

let playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        if (userChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
    
}

let showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText = `You win!. Computer choice: ${compChoice}`;
        userScore++;
        userPara.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You lose. Computer choice: ${compChoice}`;
        compScore++;
        compPara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}


// generate computer choice
let genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    let randIndex = Math.floor(Math.random() * 3)
    return options[randIndex];
}

let modeBtn = document.querySelector("#mode");
let body = document.body;
let darkMode = false;


modeBtn.addEventListener('click',() =>{
  darkMode = !darkMode; // toggle boolean
  if (darkMode) {
    modeBtn.innerText = "Light Mode";
    body.classList.add("darkModes");
    body.classList.remove("lightModes");
  } else {
    modeBtn.innerText = "Dark Mode";
    body.classList.remove("darkModes");
    body.classList.add("lightModes");
  }
});

let resultBtn = document.querySelector("#result");

resultBtn.addEventListener("click",() =>{
    if(userScore > compScore ){
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green"; 
       
    }
    else if (userScore < compScore){
        msg.innerText = "Computer won!";
        msg.style.backgroundColor = "red";
        
    }
    else{
        msg.innerText = "It's draw";
        msg.style.backgroundColor = "#081b31";
    }
    userScore =0;
    compScore = 0;
    userPara.innerText = userScore;
    compPara.innerText = compScore;
})