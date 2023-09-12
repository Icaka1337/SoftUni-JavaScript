function basketballEquipment(input) {
  let yearTax = Number(input.shift());

  let kecove = yearTax * 0.6;
  let ekip = kecove * 0.8;
  let ball = ekip * 0.25;
  let accessories = ball * 0.2;

  let totalSum = yearTax+kecove+ekip+ball+accessories;

  console.log(totalSum);
}