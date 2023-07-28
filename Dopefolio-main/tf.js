var h3=document.querySelector('h3')
var correct=document.querySelector('.correct')
var incorrect=document.querySelector('.incorrect')
var correctAn=0
var incorrectAn=0
var gameCount=10
var questions=[
    ['Sharks are mammals.','f'],
    ['Bats are blind.','f'],
['Mount Everest is the tallest mountain in the world.','t'],
['The Atlantic Ocean is the biggest ocean on Earth.','f'],
['Vatican City is the smallest country in the world.','t'],
['Infants have more bones than adults.','t'],
['The heart is the largest internal organ in the body.','f'],
['Toy Story was Pixar’s first movie.','t'],
['Cheesecake comes from Italy.','f'],
['French fries originated from France.','f']
]
function reset(){
    if(correctAn>incorrectAn){
        correctAn=0
        incorrectAn=0  
        correct.innerText=correctAn
        incorrect.innerText=incorrectAn
        alert('You won!')
    }
    else{
        alert('You lost!')
    }
}

var index=Math.floor(Math.random()*questions.length)
h3.innerText=questions[index][0]
window.onkeypress=function(e){
  gameCount--
  if(gameCount==0){
    reset()
  }
   
if(e.key=='t' || e.key=='f'){
if(e.key==questions[index][1]){
    correctAn++
correct.innerText=correctAn
}
else{
    incorrectAn++
    incorrect.innerText=incorrectAn
}
}
else{
    alert("Choose t or f")
}
index=Math.floor(Math.random()*questions.length)
h3.innerText=questions[index][0]
}
