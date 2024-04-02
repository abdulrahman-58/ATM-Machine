#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 500000;
let myPin = 224466;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin :",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "cash",
                message: "How much money you want :",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        if (fast.cash === "1000") {
            myBalance -= fast.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fast.cash === "2000") {
            myBalance -= fast.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fast.cash === "5000") {
            myBalance -= fast.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        if (fast.cash === "10000") {
            myBalance -= fast.cash;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
