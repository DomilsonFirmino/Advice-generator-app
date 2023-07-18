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
   button.classList.toggle("inativo");
   setTimeout(()=>{
      button.classList.toggle("inativo");
   },2000)
}