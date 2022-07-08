/*🚨 Si no coincide con ningún id, renderizar un mensaje de error.*/ 
const container=document.getElementById("container")
const input=document.getElementById("number")
const button=document.getElementById("btn-enviar")
const h2=document.getElementById("name-pizza")
const price=document.getElementById("price")
const parrafoError=document.getElementById("error")
button.addEventListener("click",()=>{
    let idPizza=input.value;
    for(pizza of pizzas){
        if(idPizza==pizza.id){
            h2.innerText=`La 🍕 que ud.pidió es "${pizza.nombre}"`;
            price.innerText=`precio: $${pizza.precio}`;
            

        }
        if(idPizza>pizzas.length || idPizza<0){
            showError(`¡¡La 🍕 con id "${idPizza}" no cuenta con stock!!`);
            
        }
         setTimeout(showError,3000)   
    }
         
})
 function showError(error){
    parrafoError.textContent=error;
    parrafoError.classList.add("no-stock")
    return error;
     
 } 

 


