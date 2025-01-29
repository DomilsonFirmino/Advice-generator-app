let advicecount = 0;

const showDiv = document.querySelector(".show");
const button = document.querySelector(".click");
button.addEventListener("click", advice);

window.document.onload = advice()

async function advice(){

   button.disabled = "true"
   
   if(button.disabled == "true"){
      return
   }

   try {
      const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());
      if(!response.ok)
         throw Error("something went wrong")
      const data = await response.json()
      uppcount()
      ButtonToggler()
      showMessague(data.slip.advice)
   } catch (error) {
      console.log(error)
      showMessague(error.message)
   }  
}

function uppcount(){
   advicecount = advicecount + 1
   document.querySelector(".advice__number").innerHTML = advicecount;
}

function ButtonToggler(){  
   setTimeout(()=>{
      button.disabled=""
   },5000)
}

function showMessague(payload = ""){
   showDiv.innerHTML = payload
}