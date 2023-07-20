/*
async function advice(){
   try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const advices = await response.json();
      return advices;
   }catch (error){
      console.log("error: ",error);
   }
}

const button = document.querySelector(".click");
button.addEventListener("click",() =>{
   console.log(advice().then(value =>{
      return value['slip']
   }));
})
*/

/*
function advice(){
   fetch("https://api.adviceslip.com/advice")
   .then( Response =>{
      return (Response.json());
   }).then( response =>{
      return (response['slip']);
   }).then(response =>{
      document.querySelector(".show").innerHTML = response['advice'];
   })
   .catch( error =>{
      document.querySelector(".show").innerHTML = error;
   })
}


const button = document.querySelector(".click");
button.addEventListener("click", advice);
*/
/*
async function adviceGen(){
   try{
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      return data['slip'];
   }catch (erro){
      return erro;
   }
}

const button = document.querySelector(".click");
button.addEventListener("click", async () =>{
   adviceGen().then(response =>{
      return response['advice'];
   }).then( response =>{
      document.querySelector(".show").innerHTML = response;
   })
});
*/
let advicecount = 0;

function advice(){
   fetch("https://api.adviceslip.com/advice")
   .then( Response =>{
      return (Response.json());
   }).then( response =>{
      return (response['slip']);
   }).then(response =>{
      document.querySelector(".show").innerHTML = response['advice'];
      inativo();
   })
   .catch( error =>{
      document.querySelector(".show").innerHTML = error;
   })
}

window.onload = advice();

const button = document.querySelector(".click");
button.addEventListener("click", advice);


function inativo(){
   advicecount = advicecount + 1
   document.querySelector(".advice__number").innerHTML = advicecount;
   button.classList.add("inativo");
   setTimeout(()=>{
      button.classList.remove("inativo");
   },3000)
}