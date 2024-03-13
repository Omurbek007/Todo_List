const input = document.querySelector('[type="text"]');
const ul = document.querySelector("ul");
const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
  if (input.value) {
    event.preventDefault();
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "+";
    let firstLetter = input.value[0].toUpperCase();
    li.innerHTML = firstLetter + input.value.slice(1);

    ul.appendChild(li);
    li.appendChild(span);
    input.value = "";
  } else {
    event.preventDefault();
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN" && event.target.style.color !== "grey") {
    event.target.closest("li").style.textDecoration = "line-through";
    event.target.closest("li").style.color = "grey";
    event.target.style.color = "grey";
  } else if (event.target.style.color == "grey") {
    event.target.closest("li").remove();
  }
});
