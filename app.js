let gameseq = [];
let userseq = [];
let started = false;
let buttons = ["red" , "green" , "yellow" , "purple"];
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
    game();
    started = true;
    }
});

document.querySelector(".start-btn").addEventListener('click' , function(){
    if(started == false){
        game();
        started = true;
    }
});

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    } , 250);
};

function game() {
    userseq = [];
    level += 1;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = buttons[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    buttonFlash(randbtn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
};

function btnPress() {
    let btn = this;
    buttonFlash(btn);

    let userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
};

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(game , 1000);
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        h2.innerHTML = `OOPS!<br>Your Score was <b>${level}</b><br>Press any key/start button to restart`;
        reset();
    }
};

function reset() {
    level = 0;
    gameseq = [];
    userseq = [];
    started = false;
}
