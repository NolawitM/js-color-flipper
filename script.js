const colors = ["red", "blue", "green", "#000", "orange", "purple", "pink", "brown", "gray", "black", "white"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colors");

btn.addEventListener("click", () =>{
    const random = getRandomNum();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});

function getRandomNum() {
    return Math.floor(Math.random()*colors.length);

}