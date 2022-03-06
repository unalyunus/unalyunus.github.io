const btn = document.getElementById("btn");
const body = document.getElementById("body");
const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E"];


console.log(Math.floor(Math.random() * hex.length))

btn.addEventListener("click", () => {
    

   let rgb = "#";
  
    for(let i=0;i<6;i++){
    
       rgb += hex[Math.floor(Math.random()* hex.length)]

    } 

    body.style.backgroundColor = rgb;
})