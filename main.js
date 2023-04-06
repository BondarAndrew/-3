let title = document.querySelector(".title");
let squareTitle = document.querySelector(".squareTitle");
let Button = document.querySelector(".btn");
let n2 = document.querySelector(".input2");
let n1 = document.querySelector(".input1");

function perimm() {
  let data1 = n1.value;
  let data2 = n2.value;

  let perimeter = 2 * (Number(data1) + Number(data2));
  title.textContent = `периметр ${perimeter}`;
}

function sqr() {
  let data1 = n1.value;
  let data2 = n2.value;

  let square = Number(data1) * Number(data2);
  squareTitle.textContent = `площа ${square}`;
}
Button.addEventListener("click", perimm);
Button.addEventListener("click", sqr);
