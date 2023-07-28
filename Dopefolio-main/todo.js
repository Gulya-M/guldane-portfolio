let container=document.querySelector('.container')
let btn=document.querySelector('.btn')
let inp=document.querySelector('.inp')
let box=document.querySelector('.box')
btn.onclick=function(){
  if(inp.value !==''){ let newDiv=document.createElement('div')
  let newBtn=document.createElement('button')
  text=inp.value
   newBtn.innerText='delete'
   newDiv.innerText=text
   newDiv.appendChild(newBtn)
   box.appendChild(newDiv)
   inp.value=''
   newBtn.onclick=function(){
    box.removeChild(newDiv)
  }
}
else if (inp.value =='')
{alert("Write something")}
}

 