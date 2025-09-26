const output = document.getElementById("output");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        // Replace X with * for multiplication
        const result = eval(expression.replace(/X/g, "*"));
        output.textContent = result;
        expression = result.toString();
      } catch {
        output.textContent = "Error";
        expression = "";
      }
    } else if (value === "C") {
      expression = "";
      output.textContent = "";
    } else {
      expression += value;
      output.textContent = expression;
    }
  });
});
