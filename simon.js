 let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started =false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
     if(started == false){
        console.log("game is started");
        started=true;
        levelUp();
     }
});

 let highest =document.querySelector("#highestScore");
 highest =0;//*******************************//

 function high(){
    if(level>highest)
    { highest++;}
 }
   

 function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
     btn.classList.remove("flash")
   },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash")
    },250);
 }

function levelUp(){
    userSeq=[];
    level++;
    // if(level>highest)
    // { highest++;}//*********************//
   high();
    h2.innerText = `Level ${level}`;
   highestScore.innerText=`Highest Score is:${highest}`;
    console.log(`Level updated to ${level}`);
    


    let randidx =Math.floor(Math.random()*3);
    let rancolor = btns[randidx];
    let randbtn = document.querySelector(`.${rancolor}`);
   gameSeq.push(rancolor);
   console.log(gameSeq);
   gameFlash(randbtn);
} 

   function checkAns(idx){
    //console.log("cur level : ",level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000) ;
        }
        
        // console.log("same value")
    } else{
        h2.innerHTML =`Game Over!Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor ="white";   
        },150);
        reset();
    }
   }

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id")
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started =false;
    gameSeq =[];
    userSeq=[];
    level =0;
}