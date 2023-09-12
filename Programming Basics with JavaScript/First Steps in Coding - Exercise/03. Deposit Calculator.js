function calculator(input) {
  let depositedAmount = Number(input[0]);
  let depositTerm = Number(input[1]);
  let yearInterest = Number(input[2]) / 100;

  let interest = (depositedAmount * yearInterest) / 12;

  let sum = depositedAmount + depositTerm * interest;

  console.log(sum);
}