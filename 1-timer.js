var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
 
  }
}

function pauseTimer(){
  if (!difference){

  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;

  } else {
    startTimer();
  }
}

function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;

}

function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }

  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

function sumOfMultiples(number) {
    let sum = 0;
    for(let i=1; i<number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    if (sum<=1000) { return sum;}  
}

document.getElementById('result').innerHTML=sumOfMultiples(66);

      Math.integral=function(a,b,c,xa,xb,h)
        {
 
        var xp,y,s,result=0,g=(xb-xa)/h;
        for(var i=0;i<h;i++)
        {
        xp = xa + g;
        y = (a * Math.pow(xp, 2)) + (b * xp) + c;
        s = g * y;
        result += s;
        }
 
        return result;
        }


