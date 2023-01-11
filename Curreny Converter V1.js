function want() {
    let wantToDo=input(`What do you want to do?
1-Convert currencies 2-Exit program
> `);
    if (wantToDo==1){
        return converter();
    } else if(wantToDo==2){
        return exit();
    } else{
        console.log("Unknown input");
        return want();
    }
}

function converter() {
    let convert=input(`What do you want to convert?
From: > `);
    let convert1=convert.toLowerCase();
    if (['JPY', 'EUR', 'RUB', 'USD', 'GBP', 'jpy', 'eur', 'rub', 'usd', 'gbp'].indexOf(convert1) < 0) {
        console.log("Unknown currency");
        return converter();
    } else{
        let currency = input("To: > ");
        let currency1=currency.toLowerCase();
        if (['JPY', 'EUR', 'RUB', 'USD', 'GBP', 'jpy', 'eur', 'rub', 'usd', 'gbp'].indexOf(currency1) < 0) {
            console.log("Unknown currency");
            return converter();
        } else{
            let amount = input("Amount: > ");
            if (amount != Number(amount)){
                console.log("The amount has to be a number");
                return converter();
            } else if(amount < 1){
                console.log("The amount cannot be less than 1");
                return converter();
            } else{
                let result;
                if (currency1=="jpy" && convert1=="usd"){
                    result=amount*113.5;
                } else if (currency1=="usd" && convert1=="jpy"){
                    result=amount/113.5;
                }else if (currency1=="jpy" && convert1=="eur"){
                    result=amount*((1/0.89)*(113.5/1));
                }else if (currency1=="eur" && convert1=="jpy"){
                    result=amount*((1/113.5)*(0.89/1));
                }else if (currency1=="jpy" && convert1=="rub"){
                    result=amount*((1/74.36)*(113.5/1));
                }else if (currency1=="rub" && convert1=="jpy"){
                    result=amount*((1/113.5)*(74.36/1));
                }else if (currency1=="jpy" && convert1=="gbp"){
                    result=amount*((1/0.75)*(113.5/1));
                }else if (currency1=="gbp" && convert1=="jpy"){
                    result=amount*((1/113.5)*(0.75/1));
                }else if (currency1=="jpy" && convert1=="jpy"){
                    result=amount*1;
                }else if(currency1=="usd" && convert1=="usd"){
                    result=amount*1;
                }else if(currency1=="usd" && convert1=="eur"){
                    result=amount*(1/0.89);
                }else if(currency1=="eur" && convert1=="usd"){
                    result=amount*0.89;
                }else if(currency1=="usd" && convert1=="rub"){
                    result=amount*(1/74.36);
                }else if(currency1=="rub" && convert1=="usd"){
                    result=amount*74.36;
                }else if(currency1=="usd" && convert1=="gbp"){
                    result=amount*(1/0.75);
                }else if(currency1=="gbp" && convert1=="usd"){
                    result=amount*0.75;
                }else if(currency1=="eur" && convert1=="gbp"){
                    result = amount * ((1/0.75)*(0.89/1));
                }else if(currency1=="gbp" && convert1=="eur"){
                    result = amount * ((1/0.89)*(0.75/1));
                }else if(currency1=="eur" && convert1=="rub"){
                    result = amount * ((1/74.36)*(0.89/1));
                }else if(currency1=="rub" && convert1=="eur"){
                    result = amount * ((1/0.89)*(74.36/1));
                }else if(currency1=="eur" && convert1=="eur"){
                    result = amount*1;
                }else if(currency1=="rub" && convert1=="rub"){
                    result=amount*1;
                }else if(currency1=="gbp" && convert1=="rub"){
                    result=amount*((1/74.36)*(0.75/1));
                }else if(currency1=="rub" && convert1=="gbp"){
                    result=amount*((1/0.75)*(74.36/1));
                }else if(currency1=="gbp" && convert1=="gbp"){
                    result=amount*1;
                }
                console.log(`Result: ${amount} ${convert.toUpperCase()} equals ${result.toFixed(4)} ${currency.toUpperCase()}`);
                want();
            }
        }
    }
}

function exit() {
    console.log("Have a nice day!");
}

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
const input = require('sync-input');
want();







