let userscore = 0;
let compscore = 0;


const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#Comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}
 
const showWinner = (userwin , userchoice , compchoice) =>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        console.log('you win!');
        msg.innerText= `Chotu Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        compscorepara.innerText = compscore;
        console.log('you lose');
         msg.innerText = `Chotu Lose ! ${compchoice} beats your ${userchoice}`;
         
         msg.style.backgroundColor="red";
    }
}

const drawgame = ()=>{
    console.log("Game was draw");
      msg.innerText= "Draw!";
        msg.style.color="black";
        msg.style.backgroundColor="white";
};

const playgame = (userchoice) => {
    console.log("userchoice=", userchoice);

    const compchoice = gencompchoice();
    console.log("compchoice=", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            // Rock beats scissors, loses to paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // Paper beats rock, loses to scissors
            userwin = compchoice === "scissor" ? false : true;
        } else { // userchoice must be "scissor"
            // Scissors beats paper, loses to rock
            userwin = compchoice === "rock" ? false : true;
        }
        // Pass userchoice and compchoice here!
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

  
        playgame(userchoice);
    });
});