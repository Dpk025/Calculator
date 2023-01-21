let string="";
let buttons=document.querySelectorAll('.btn');
// $(document).ready(function()=>{
//   $(".btn-del").prop("disable",true);
// });
Array.from(buttons).forEach((btn)=>{
  btn.addEventListener('click',(event)=>{
    
    if(event.target.innerHTML=='='){
      string=eval(string);
       document.querySelector('input').value=string;
    }
    else if(event.target.innerHTML=="del"){
      let s=string.substring(0,string.length-1);
      console.log(s);
      string=s;
      console.log(string)
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

