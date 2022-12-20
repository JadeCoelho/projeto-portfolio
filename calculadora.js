let equal_pressed = 0;

//todos exceto AC e DEL
let button_input = document.querySelectorAll(".input-button");
//input,equal,clear e erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//acessar cada classe usando forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Input inválido");
  }
});

//Limpar o Input
clear.addEventListener("click", () => {
  input.value = "";
});
//Apagar um dígito
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
}); 