function fruitShop(input) {
  let product = input.shift();
  let dayOfWeek = input.shift();
  let productCount = Number(input.shift());

  let banana, apple, orange, grapefruit, kiwi, pineapple, grapes;

  let error=false;

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      banana = 2.5;
      apple = 1.2;
      orange = 0.85;
      grapefruit = 1.45;
      kiwi = 2.7;
      pineapple = 5.5;
      grapes = 3.85;
      break;
    case "Saturday":
    case "Sunday":
      banana = 2.7;
      apple = 1.25;
      orange = 0.9;
      grapefruit = 1.6;
      kiwi = 3;
      pineapple = 5.6;
      grapes = 4.2;
      break;
      default:
        error=true;
        break;
  }

  switch (product) {
    case "banana":
      product = banana;
      break;
    case "apple":
      product = apple;
      break;
    case "orange":
      product = orange;
      break;
    case "grapefruit":
      product = grapefruit;
      break;
    case "kiwi":
      product = kiwi;
      break;
    case "pineapple":
      product = pineapple;
      break;
    case "grapes":
      product = grapes;
      break;
    default:
      error=true;
      break;
  }
  if (error) {
    console.log("error");
  } else {
    console.log((product * productCount).toFixed(2));
  }
}
