
let gifts=[
    {name:"Teddy Bear", Price: 10, ID: 1},
    {name: "Big Red Ball", Price: 5, ID: 2},
    {name: "Huge Bear", Price: 50, ID: 3},
    {name: "Candy", Price: 8, ID: 4},
    {name: "Stuffed Tiger", Price: 15, ID:5},
    {name: "Stuffed Dragon", Price: 30, ID: 6},
    {name: "Skateboard", Price: 100, ID: 7},
    {name: "Toy Car", Price: 25, ID: 8},
    {name: "Basketball", Price: 20, ID: 9},
    {name: "Scary Mask", Price: 75, ID: 10}
];


console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:
`);
let initialNumberOfTickets=0;
for (x in gifts){
    console.log(`${gifts[x].ID}- ${gifts[x].name}, Cost: ${gifts[x].Price} tickets`);
}
const input = require('sync-input');

while (2>1){
    let choice=input(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop
`);
    if ((!Number(choice)) || (Number(choice)>5)){
        console.log(`Please enter a valid number!`);
        continue;
    } else {
        choice=Number(choice);
        switch (choice){
            case 1:
                for (x in gifts){

                    if (gifts.length<=1){
                        console.log('Wow! There are no gifts to buy.');
                        break;
                    } else{
                        let choice_2=input(`Enter the number of the gift you want to get: `);
                        if((!Number(choice_2)) && !(choice_2==0)){
                            console.log('Please enter a valid number!');
                            break;
                    } else if(choice_2>10 || gifts[Number(choice_2-gifts[x].ID)]==undefined){
                        console.log('There is no gift with that number!');
                        break;
                    }
                    else{
                        choice_2=Number(choice_2);
                        if (choice_2==(Number(gifts[x].ID)+(choice_2-gifts[x].ID))){
                            if (Number(gifts[x].Price)<initialNumberOfTickets){
                                console.log(`Here you go, one ${gifts[choice_2-gifts[x].ID].name}!`)
                                initialNumberOfTickets=initialNumberOfTickets-Number(gifts[choice_2-gifts[x].ID].Price);
                                console.log(`Total tickets: ${initialNumberOfTickets}`);
                                gifts.splice(gifts.findIndex(e=> e.name === gifts[choice_2-gifts[x].ID].name),1);
                                console.log('Have a nice day!');
                                break;
                            } else {
                                console.log("You don\'t have enough tickets to buy this gift.");
                                break;
                            }
                        }
                        else {
                            console.log('There is no gift with that number!');
                            break;
                        }
                    }
                }}
                break;
            case 2:
                let amount=input(`Enter the ticket amount: `);
                if ((Number(amount)===0 || Number(amount)===1000) || (Number(amount)<1000 && Number(amount)>0)){
                    console.log(`Total tickets: ${initialNumberOfTickets+Number(amount)}
Have a nice day!`);
                    initialNumberOfTickets=initialNumberOfTickets+Number(amount);
                } else {
                    console.log('Please enter a valid number between 0 and 1000.');
                    break;
                }
                break;
            case 3:
                console.log(`Total tickets: ${initialNumberOfTickets}
Have a nice day!`);
                break;
            case 4:
                console.log(`Here's the list of gifts:
`);
                for (x in gifts){
                    console.log(`${gifts[x].ID}- ${gifts[x].name}, Cost: ${gifts[x].Price} tickets`);
                };
                console.log("Have a nice day!");
                break;
            case 5:
                if (gifts.length==0) {
                    console.log('Wow! There are no gifts to buy.');
                    break;
                } else {
                console.log('Have a nice day!');
                }
                break;
        }
        if (choice==5){
            break;
        } else {
            continue;
        }
    }
}


