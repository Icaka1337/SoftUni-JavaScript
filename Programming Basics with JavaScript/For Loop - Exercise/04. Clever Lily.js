function cleverLily(input) {
  let age = Number(input.shift());
  let wmPrice = Number(input.shift());
  let toyPrice = Number(input.shift());

  let birthdayMoney = 10;
  let money = 0;
  let toys = 0;

  for (let index = 1; index <= age; index++) {
    if (index % 2 == 0) {
      money += birthdayMoney;
      birthdayMoney += 10;
      money--;
    } else {
      toys++;
    }
  }
  let toyMoney = toys * toyPrice;
  let totalMoney = money + toyMoney;

  if (totalMoney >= wmPrice) {
    console.log(`Yes! ${(totalMoney - wmPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(wmPrice - totalMoney).toFixed(2)}`);
  }
}