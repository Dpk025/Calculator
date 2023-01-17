let string="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
  btn.addEventListener('click',(event)=>{
    
    if(event.target.innerHTML=='='){
      string=eval(string);
       document.querySelector('input').value=string;
    }
      else if(event.target.innerHTML=='C'){
        string="";
        document.querySelector('input').value=string;
      }
    else{
      string=string+event.target.innerHTML;
    document.querySelector('input').value=string;
    }
    console.log(event.target);
    
   
  })
})

