function cinema(input) {
    let premierePrice = 12;
    let normalPrice=7.50;
    let discount = 5;

    let projectionType = input.shift();
    let rows = Number(input.shift());
    let cows = Number(input.shift());

    let totalPeople = rows*cows;

    if (projectionType=="Premiere") {
        console.log(`${(totalPeople*premierePrice).toFixed(2)} leva`);
    }
    else if (projectionType=="Normal") {
        console.log(`${(totalPeople*normalPrice).toFixed(2)} leva`);
    }
    else if (projectionType=="Discount") {
        console.log(`${(totalPeople*discount).toFixed(2)} leva`);
    }
}