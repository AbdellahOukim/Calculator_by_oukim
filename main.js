const btns = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operators");
const deleteBtn = document.querySelector(".delete");
const deleteAllBtn = document.querySelector(".delete-all");
const equal = document.querySelector(".equal");
const output = document.querySelector(".output");

// Show the calculation

btns.forEach((btn) => {
  btn.addEventListener("click", (_) => {
    if (btn.innerText === "." && output.innerText.includes(".")) return;
    if (
      btn.dataset.do === "operators" &&
      output.innerHTML.endsWith(btn.innerText)
    )
      return;
    if (output.innerHTML.endsWith("/") && btn.innerText === "*") return;
    if (output.innerHTML.endsWith("*") && btn.innerText === "/") return;

    if (output.innerText === "" && btn.dataset.do === "operators") {
      output.innerText = `0`;
    }
    output.innerHTML += btn.innerText;
  });
});

// Delete one number

deleteBtn.addEventListener("click", (_) => {
  output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
});

// Delete all

deleteAllBtn.addEventListener("click", (_) => {
  output.innerHTML = "";
});

//Evual the result

equal.addEventListener("click", (_) => {
  output.innerHTML = eval(output.innerHTML);
});
