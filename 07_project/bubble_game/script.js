let hitrn = 0;
let timer = 7;
let score = 0;

function makebbl() {
  let bbl = "";

  for (let i = 1; i <= 161; i++) {
    bbl += `<div class="bbl">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = bbl;
}
function runTime(){
  let timerint = setInterval(function(){
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer
    } else {
      clearInterval(timerint)
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
    }
  },1000)
}
function hitValue(){
   hitrn = Math.floor(Math.random() * 10)
   document.querySelector("#hitval").textContent= hitrn;
}
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score
}
function decreaseScore(){
  score -= 10;
  document.querySelector("#scoreval").textContent = score
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
  let clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    makebbl();
    hitValue()
    timer += 4
  }else{
    decreaseScore()
  } 
});


makebbl();
runTime();
hitValue();







