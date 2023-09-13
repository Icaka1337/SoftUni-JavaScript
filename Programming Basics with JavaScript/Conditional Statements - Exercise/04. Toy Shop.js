function toyShop(input) {
  let puzzlePrice = 2.6;
  let talkingDollPrice = 3;
  let bearPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;

  let holidayPrice = Number(input.shift());

  let puzzle = Number(input.shift());
  let talkingDoll = Number(input.shift());
  let bear = Number(input.shift());
  let minion = Number(input.shift());
  let truck = Number(input.shift());

  let sum =
    puzzle * puzzlePrice +
    talkingDoll * talkingDollPrice +
    bear * bearPrice +
    minion * minionPrice +
    truck * truckPrice;

  let toyCount = puzzle + talkingDoll + bear + minion + truck;

    if (toyCount>=50) {
        sum*=0.75;
    }

    sum*=0.9;

    if (sum>=holidayPrice) {
        console.log(`Yes! ${(sum-holidayPrice).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(holidayPrice-sum).toFixed(2)} lv needed.`)
    }
}