function repainting(input) {
  let nailonPrice = 1.5;
  let paintPrice = 14.5;
  let razreditelPrice = 5;

  let nailonCount = Number(input.shift()) + 2;
  let paintCount = Number(input.shift()) * 1.1;
  let razreditelCount = Number(input.shift());
  let hours = Number(input.shift());

  let materials =
    nailonCount * nailonPrice +
    paintCount * paintPrice +
    razreditelPrice * razreditelCount +
    0.4;

    let workPrice = (materials*0.3) * hours;

  let totalSum = materials+workPrice;

  console.log(totalSum);
}