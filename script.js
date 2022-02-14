window.addEventListener("load", () => {
const value = document.querySelector("input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");


btn.addEventListener("click", function() {
    let newList = document.createElement("li");
    newList.className = "newlist"
    list.appendChild(newList);
    newList.innerHTML = value.value;
    value.value = "";


const lists = document.querySelectorAll("li");
lists.forEach((x) => {
    x.addEventListener("click", () => {
    x.remove();
})
})

})






});