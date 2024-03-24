#! /usr/bin/env node
import inquirer from "inquirer";
const num1 = await inquirer.prompt([
    { name: "firstNumber", type: "number ", message: "Enter first number" },
    { name: "secondNumber", type: "number", message: "Enter secondNumber" },
    {
        name: "operator",
        type: "list",
        message: "select one of the operator to perform action",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (num1.operator === "Addition") {
    console.log(num1.firstNumber + num1.secondNumber);
}
else if (num1.operator === "Subtraction") {
    console.log(num1.firstNumber - num1.secondNumber);
}
else if (num1.operator === "Multiplication") {
    console.log(num1.firstNumber * num1.secondNumber);
}
else if (num1.operator === "Division") {
    console.log(num1.firstNumber / num1.secondNumber);
}
else {
    console.log("please select valid operator");
}
