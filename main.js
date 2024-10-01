"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{
        type: "number",
        name: "number1",
        message: "write your value",
    }, {
        type: "number1",
        name: "number2",
        message: "write your value no 2",
    }, {
        type: "list",
        name: "operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "/"]
    }
]);
var number1 = answer.number1, number2 = answer.number2, operator = answer.operator;
if (number1 && number2 && operator) {
    var result = 0;
    if (operator === "+") {
        result = number1 + number2;
    }
    else if (operator === "-") {
        result = number1 - number2;
    }
    else if (operator === "*") {
        result = number1 * number2;
    }
    else if (operator === "/") {
        result = number1 / number2;
    }
    console.log("your result is : " + result);
}
else {
    console.log("Please assign valid operator");
}
