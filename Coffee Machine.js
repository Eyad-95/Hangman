// function howManyCoffees(){
//     if((Number(amountOfCoffee)>=15 && Number(amountOfWater)>=200 && Number(amountOfMilk)>=50) || (Number(amountOfCoffee)==0 && Number(amountOfWater)>=0 && Number(amountOfMilk)>=0 && Number(numberOfCups)==0)){
//         if (Number(numberOfCups)<maxAmount){
//             console.log(`Yes, I can make that amount of coffee (and even ${maxAmount-Number(numberOfCups)} more than that)`);
//         }
//         else if(Number(numberOfCups)==maxAmount){
//             console.log(`Yes, I can make that amount of coffee`);
//         }
//         else{
//             console.log(`No, I can make only ${maxAmount} cups of coffee`);
//         }
// }
// }
let coffeeChoices=[{name: "espresso", waterAmount: 250, milkAmount: 0, coffeeAmount: 16, cost: 4, ID: 1},
                    {name: "latte", waterAmount: 350, milkAmount: 75, coffeeAmount: 20, cost: 7, ID: 2},
                    {name: "cappuccino", waterAmount: 200, milkAmount: 100, coffeeAmount: 12, cost: 6, ID: 3}];
let amountOfCoffee=120;
let amountOfWater=400;
let amountOfMilk=540;
let numberOfCups=9;
let amountOfMoney=550;
function buy(){
    let choiceOfCoffee=input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:
`);
    if (choiceOfCoffee=="back"){
        action();
    }
    else {
        for (x in coffeeChoices){
            if (Number(choiceOfCoffee)==coffeeChoices[x].ID){
                if((Number(amountOfCoffee)>=Number(coffeeChoices[x].coffeeAmount) && Number(amountOfWater)>=Number(coffeeChoices[x].waterAmount) && Number(amountOfMilk)>=Number(coffeeChoices[x].milkAmount)) || (Number(amountOfCoffee)==0 && Number(amountOfWater)>=0 && Number(amountOfMilk)>=0 && Number(numberOfCups)==0)){
                    console.log(`I have enough resources, making you a coffee!`);
                    amountOfCoffee-= Number(coffeeChoices[x].coffeeAmount);
                    amountOfWater-= Number(coffeeChoices[x].waterAmount);
                    amountOfMilk-= Number(coffeeChoices[x].milkAmount);
                    numberOfCups-=1;
                    amountOfMoney+= Number(coffeeChoices[x].cost);
                    action();
                }
                else {
                    if (Number(amountOfCoffee)<Number(coffeeChoices[x].coffeeAmount)) {
                        console.log(`Sorry, not enough coffee!`);
                        action();
                    }
                    else if(Number(amountOfWater)<Number(coffeeChoices[x].waterAmount)) {
                        console.log(`Sorry, not enough water!`);
                        action();
                    }
                    else if(Number(amountOfMilk)<Number(coffeeChoices[x].milkAmount)) {
                        console.log(`Sorry, not enough milk!`);
                        action();
                    }
                    else{
                        cosole.log("hey");
                        break;
                    }
                }
            }
            else {
                continue;
            }
        }
    }


//     switch (Number(choiceOfCoffee)){
//         case 1:
//             if((Number(amountOfCoffee)>=15 && Number(amountOfWater)>=200 && Number(amountOfMilk)>=50) || (Number(amountOfCoffee)==0 && Number(amountOfWater)>=0 && Number(amountOfMilk)>=0 && Number(numberOfCups)==0)){
//                 if (Number(numberOfCups)<maxAmount){
//                     console.log(`Yes, I can make that amount of coffee (and even ${maxAmount-Number(numberOfCups)} more than that)`);
//                 }
//                 else if(Number(numberOfCups)==maxAmount){
//                     console.log(`Yes, I can make that amount of coffee`);
//                 }
//                 else{
//                     console.log(`No, I can make only ${maxAmount} cups of coffee`);
//                 }
//             } else {
//                 break;
//             }
//             break;
//         case 2:
//         case 3:
//     }
}

function display(){
    console.log(`The coffee machine has:
${amountOfWater} ml of water
${amountOfMilk} ml of milk
${amountOfCoffee} g of coffee beans
${numberOfCups} disposable cups
$${amountOfMoney} of money`);
    action();
}

function fill(){
    let addWater=input(`Write how many ml of water you want to add:
`);
    let addMilk=input(`Write how many ml of milk you want to add:
`);
    let addCoffee=input(`Write how many gr of coffee beans you want to add:
`);
    let addCups=input(`Write how many disposable cups you want to add:
`);
    amountOfWater+=Number(addWater);
    amountOfMilk+=Number(addMilk);
    amountOfCoffee+=Number(addCoffee);
    numberOfCups+=Number(addCups);
    action();
}

function take(){
    console.log(`I gave you $${amountOfMoney}
`);
    amountOfMoney=0;
    action();
}

function action() {
    let userChoice=input(`
Write action (buy, fill, take, remaining, exit):
`);
    while (2>1){
        switch (userChoice){
            case "buy":
                buy();
                break;
            case "fill":
                fill();
                break
            case "take":
                take();
                break;
            case "remaining":
                display();
                break;
            case "exit":
                break;
        }
        break;
    }
}

const input = require('sync-input')

action();

