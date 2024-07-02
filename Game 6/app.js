let boxes=document.querySelectorAll(".box");
let rst_bn=document.querySelector("#reset");
let nbtn=document.querySelector(".new-btn");
let div=document.querySelector(".msg-container");
let para=document.querySelector("#msg");
let count=0;
let turnX=true;

let patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
function ResetGame(){
    div.classList.add("hidden");
    turnX=true;
    disableBtn();
       EnableGame();
   }
boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        count++;
    if(turnX){
        box.innerHTML="X";
        box.classList.remove("zero");
        box.classList.add("cross");
        turnX=false;
    }
    else{
        box.innerHTML="O";
        box.classList.remove("cross");
        box.classList.add("zero");
        
        turnX=true;
    }
    box.disabled=true;
    let hero=winner();
    if(count==9){
        if(!hero){
            gameTie();
        }
        else {
            winner();
        }
    }
    });
    });

    function gameTie(){
        para.innerHTML="Match Draw!! <br> Please Try Again";
        div.classList.remove("hidden");
        disableBtn();
    }
    function disableBtn(){
        for(let box of boxes){
            box.disabled=true;
            count=0;
        }
    }

    function EnableGame(){
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }

function showChampion(champion){
para.innerHTML=`Congratulations!!<br>The new champion is ${champion}`;
div.classList.remove("hidden");
disableBtn();
}
    function winner(){
for(let pattern of patterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos3val===pos2val){
            showChampion(pos1val);
        }
    }
}
    }

    nbtn.addEventListener("click",ResetGame);
    rst_bn.addEventListener("click",ResetGame);

    