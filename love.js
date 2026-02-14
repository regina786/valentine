let current=1;

function next(){
document.getElementById("q"+current).classList.add("hidden");
current++;
document.getElementById("q"+current).classList.remove("hidden");
}
function sayNo(){
document.getElementById("customAlert").classList.remove("hidden");
}

function showError(){
    document.getElementById("errorPopup").classList.remove("hidden");
}

function closeError(){
    document.getElementById("errorPopup").classList.add("hidden");
}


function showResult(){
document.getElementById("q5").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

setTimeout(()=>{
document.getElementById("lovePopup").classList.remove("hidden");
},1000);
}

function closePopup(){
document.getElementById("lovePopup").classList.add("hidden");
}

function checkAns(btn,isCorrect){

    if(isCorrect){
        btn.classList.add("correct");

        setTimeout(()=>{
            next();
        },800);

    }else{
        btn.classList.add("wrong");

        setTimeout(()=>{
            btn.classList.remove("wrong");
        },800);
    }
}


/* hearts generator */
function createHearts(){
const container=document.querySelector(".hearts");
for(let i=0;i<25;i++){
let heart=document.createElement("span");
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(3+Math.random()*5)+"s";
heart.style.fontSize=(15+Math.random()*30)+"px";
container.appendChild(heart);
}
}
createHearts();
