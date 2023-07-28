var yourChoice=document.querySelector('.your-choice')
var yourPower=document.querySelector('.your-power')
var yourLife=document.querySelector('.your-life')
var yourNick=document.querySelector('.your-nick')
var yourHouse=document.querySelector('.your-house')

var box1=document.querySelector('.box1')
var box2=document.querySelector('.box2')
var box3=document.querySelector('.box3')
var box4=document.querySelector('.box4')
var div2=document.querySelector('.enemies')
var div3=document.querySelector('.div3')


var fight=document.querySelector('.fight')
var container=document.querySelector('.container')
var arena=document.querySelector('.arena')
var hero=document.querySelector('.hero')
var enemy=document.querySelector('.enemy')
var heropower=document.querySelector('.heropower')
var herolife=document.querySelector('.herolife')
var enemypower=document.querySelector('.enemypower')
var enemylife=document.querySelector('.enemylife')
var fighting=document.querySelector('.fighting')

var firstChoice=false
var secondChoice=false
var box1insidediv2=false
var box2insidediv2=false
var box3insidediv2=false
var box4insidediv2=false

var heroBeat=document.querySelector('.herobeat')
var hit=document.querySelector('.hit')
var enemyhealth=document.querySelector('.enemyhealth')
var fire=document.querySelector('.fire')

var enemyBeat=document.querySelector('.enemybeat')
var hit2=document.querySelector('.hit2')
var herohealth=document.querySelector('.herohealth')
var fire=document.querySelector('.fire')
 var health=document.querySelector('.health')
 var layout=document.querySelector('.layout')
 var health2=document.querySelector('.health2')
 var layout2=document.querySelector('.layout2')
 var width=100
 var width2=100
box1.onclick=function()
{ if(firstChoice==false)
  {  if(box1insidediv2==false)
        { box1insidediv2=true
            firstChoice=box1
           
            yourChoice.innerText=('Your choice:'+this.dataset.name)
            yourPower.innerText=('Your power:'+this.dataset.power)
            yourLife.innerText=('Your life:'+this.dataset.life)
            yourNick.innerText=('Your nick:'+this.dataset.nickname)
            yourHouse.innerText=('Your house:'+this.dataset.house)
            div2.append(box2)
            div2.append(box3)
            div2.append(box4)

    }
    
       

}
        else if(secondChoice==false) 
        if(box1insidediv2==false){
            {secondChoice=box1,
            
                div3.append(box1)}  
        }
      
}
   

box2.onclick=function()
{ if(firstChoice==false)
   { if(box2insidediv2==false)
        { box2insidediv2=true
            firstChoice=box2
            yourChoice.innerText=('Your choice:'+this.dataset.name)
            yourPower.innerText=('Your power:'+this.dataset.power)
            yourLife.innerText=('Your life:'+this.dataset.life)
            yourNick.innerText=('Your nick:'+this.dataset.nickname)
            yourHouse.innerText=('Your house:'+this.dataset.house)
            div2.append(box1)
            div2.append(box3)
            div2.append(box4)
    }
  

}
    else if(secondChoice==false) 
  {  if(box2insidediv2==false)
        {secondChoice=box2,
            div3.append(box2)}  
    }
   
}
box3.onclick=function()
{ if(firstChoice==false)
   
    { if(box3insidediv2==false)
        {
            box3insidediv2=true
            firstChoice=box3
            yourChoice.innerText=('Your choice:'+this.dataset.name)
            yourPower.innerText=('Your power:'+this.dataset.power)
            yourLife.innerText=('Your life:'+this.dataset.life)
            yourNick.innerText=('Your nick:'+this.dataset.nickname)
            yourHouse.innerText=('Your house:'+this.dataset.house)
            div2.append(box2)
            div2.append(box1)
            div2.append(box4)
        
        }
    }
    
    else if(secondChoice==false) 
    if(box3insidediv2==false)
    {
        {secondChoice=box3,
            div3.append(box3)} 
    }
     
}
box4.onclick=function()
{ if(firstChoice==false)
   
    { if(box4insidediv2==false)
        {    box4insidediv2=true
            firstChoice=box4
            yourChoice.innerText=('Your choice:'+this.dataset.name)
            yourPower.innerText=('Your power:'+this.dataset.power)
            yourLife.innerText=('Your life:'+this.dataset.life)
            yourNick.innerText=('Your nick:'+this.dataset.nickname)
            yourHouse.innerText=('Your house:'+this.dataset.house)
            div2.append(box2)
            div2.append(box3)
            div2.append(box1)
        
        }
    }
    
    
    else if(secondChoice==false) 
   
    { if(box4insidediv2==false)
        {secondChoice=box4,
            div3.append(box4)} 
    }
  
}
fight.onclick=function()
{
    container.style.display='none',
    arena.style.display='block',
    hero.append(firstChoice)
    enemy.append(secondChoice)
    heropower.innerText=('Power:'+firstChoice.dataset.power)
    herolife.innerText=('Life:'+firstChoice.dataset.life)
    enemypower.innerText=('Power:'+secondChoice.dataset.power)
    enemylife.innerText=('Life:'+secondChoice.dataset.life)
  
}
fire.onclick=function()

{
    var heroBeat=parseInt(firstChoice.dataset.power)
    var hit=Math.floor(Math.random()*heroBeat)
    var  enemyhealth=parseInt(secondChoice.dataset.life)
    
    var end=enemyhealth-hit
    secondChoice.dataset.life=end
      if(width<0){
        layout.style.display='none'
    }
    width=width-hit
      layout.style.width=`${width}%`

    if(end<0)
{    alert('GAME OVER!')
return}

enemylife.innerText='Life:'+end


var enemyBeat=parseInt(firstChoice.dataset.power)
var hit2=Math.floor(Math.random()*enemyBeat)
var  herohealth=parseInt(secondChoice.dataset.life)

var end2=herohealth-hit2
secondChoice.dataset.life=end2
if(width2<0){
    layout2.style.display='none'
}
width2=width2-hit2
  layout2.style.width=`${width2}%`

if(end2<0)
{    alert('YOU WON!')
return}

herolife.innerText='Life:'+end2
}
