function shopping(input){
    let videocardPrice=250;
    
    let budget = Number(input.shift());
    let videocards = Number(input.shift());
    let processors = Number(input.shift());
    let ram = Number(input.shift());
    
    let processorPrice = (videocards*videocardPrice)*0.35;
    let ramPrice = (videocards*videocardPrice)*0.10;

    let sum = videocardPrice*videocards+processorPrice*processors+ramPrice*ram;

    if (videocards>processors) {
        sum*=0.85;
    }

    if (budget>=sum) {
        console.log(`You have ${(budget-sum).toFixed(2)} leva left!`)
    }
    else{
        console.log(`Not enough money! You need ${(sum-budget).toFixed(2)} leva more!`)
    }
}