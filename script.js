const colors = ["red", "blue", "green", "#000", "orange", "purple", "pink", "brown", "gray", "black", "white"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colors");

btn.addEventListener("click", () =>{
    const random = 3;
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});