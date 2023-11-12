const form = document.querySelector("form");
const result = document.querySelector("#result");
const reset = document.querySelector("#btnReset");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let p = Number(document.querySelector("#input-principal").value);
  let i = Number(document.querySelector("#input-rate").value) / 100 / 12;
  let n = Number(document.querySelector("#input-years").value) * 12;

  const m = (p * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  result.style.display = "block";
  result.innerHTML = "Your monthly mortgage payment will be $" + m.toFixed(2);
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach((field) => (field.value = ""));

  result.style.display = "none";
  result.innerHTML = "";
});
