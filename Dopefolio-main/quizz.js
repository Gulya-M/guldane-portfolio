
let hours=document.querySelector('.hours')
let minutes=document.querySelector('.minutes')
let seconds=document.querySelector('.seconds')
let start=document.querySelector('.start')
let stop=document.querySelector('.stop')
let reset=document.querySelector('.reset')
let interval=0

let hourVal=0
let minuteVal=0
let secondVal=0

let box=document.querySelector('.box')
function result(){
    let correct=0;
    let incorrect=0;
    if(document.getElementById('correct1').checked){
        correct++
    }
    else if(document.getElementById('incorrect1').checked)
    {
        incorrect++
    }
    if(document.getElementById('correct2').checked){
        correct++
    }
    else if(document.getElementById('incorrect2').checked)
    {
        incorrect++
    } if(document.getElementById('correct3').checked){
        correct++
    }
    else if(document.getElementById('incorrect3').checked)
    {
        incorrect++
    } if(document.getElementById('correct4').checked){
        correct++
    }
    else if(document.getElementById('incorrect4').checked)
    {
        incorrect++
    } if(document.getElementById('correct5').checked){
        correct++
    }
    else if(document.getElementById('incorrect5').checked)
    {
        incorrect++
    } if(document.getElementById('correct6').checked){
        correct++
    }
    else if(document.getElementById('incorrect6').checked)
    {
        incorrect++
    }
    if(document.getElementById('correct7').checked){
        correct++
    }
    else if(document.getElementById('incorrect7').checked)
    {
        incorrect++
    } if(document.getElementById('correct8').checked){
        correct++
    }
    else if(document.getElementById('incorrect8').checked)
    {
        incorrect++
    } if(document.getElementById('correct9').checked){
        correct++
    }
    else if(document.getElementById('incorrect9').checked)
    {
        incorrect++
    }
    if(document.getElementById('correct10').checked){
        correct++
    }
    else if(document.getElementById('incorrect10').checked)
    {
        incorrect++
    }
    document.write(`Correct: ${correct}  Incorrect: ${incorrect}`)

}
function begin(){
    secondVal++
    seconds.innerHTML=secondVal
    if(secondVal<10){
        seconds.innerHTML='0'+secondVal

    }
    if(secondVal==60){
        secondVal=0
        minuteVal++
        minutes.innerHTML=minuteVal
        if (minuteVal<10)
        {
            minutes.innerHTML='0'+minuteVal
        }
    }
    else if(minuteVal==60){
        minuteVal=0
        hourVal++
        hours.innerHTML=hourVal
        if(hourVal<10){
            hours.innerHTML='0'+hourVal
        }
    }
 }

 start.onclick=function(){
    setInterval(begin,1000)
    interval++
 }
 stop.onclick=function(){
    clearInterval(interval)
 }
 reset.onclick=function(){
    hourVal=0
    minuteVal=0
    secondVal=0
    hours.innerHTML=hourVal
    minutes.innerHTML=minuteVal
    seconds.innerHTML=secondVal
 }
