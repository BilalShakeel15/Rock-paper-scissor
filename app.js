const choices=document.querySelectorAll(".same");
const msg=document.querySelector("button");
const user=document.querySelector("#userscore");
const computer=document.querySelector("#compscore");
console.log(user.innerText);

let userWin=true;
let userScore=0;
let compScore=0;

const draw=()=>{
    console.log("Draw triggered");
    msg.innerHTML="Draw!!Play your move again.";
    msg.style.backgroundColor="#49243E";
};
const showWinner=(userWin, choose, compChoice)=>{
    if(userWin===true)
    {
        userScore++;
        user.innerText=userScore;
        msg.innerText=`Your ${choose} beats computer ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        computer.innerText=compScore;
        msg.innerText=`Computer ${compChoice} beats your ${choose}.`;
        msg.style.backgroundColor="red";
    }
};
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };
const compchoice=(userChoice)=>{
    const compChoice = genCompChoice();
    console.log("User choice: ",userChoice,userChoice.length);
    console.log("Comp choice: ",compChoice,compChoice.length);
    if(userChoice === compChoice)
    {
        draw();
    }
    else if(userChoice==="rock")
    {
        userWin= compChoice ==="paper"? false:true;
        showWinner(userWin, userChoice, compChoice);
    }
    else if(userChoice==="paper")
    {
        userWin= compChoice ==="rock"? true:false;
        showWinner(userWin, userChoice, compChoice);
    }
    else
    {
        userWin=compChoice ==="paper"?true:false;
        showWinner(userWin, userChoice, compChoice);
    }
    
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        compchoice(userChoice);
    })
});
