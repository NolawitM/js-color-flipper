const colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".colors");

btn.addEventListener("click", ()=>{
    let hexcolor= "#";
    
    for(let i=0; i<6; i++){
        hexcolor += colors[getRandomNum()]; ;
      }
      color.textContent = hexcolor;
      document.body.style.backgroundColor = hexcolor;
})

function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}