function foodDelivery(input) {
  let chickenPrice = 10.35;
  let fishPrice = 12.4;
  let veganPrice = 8.15;

  let chickenCount = Number(input.shift());
  let fishCount = Number(input.shift());
  let veganCount = Number(input.shift());

  let totalSum =
    chickenCount * chickenPrice +
    fishCount * fishPrice +
    veganCount * veganPrice;

  let dessert = totalSum * 0.2;

  totalSum += dessert + 2.5;

  console.log(totalSum);
}