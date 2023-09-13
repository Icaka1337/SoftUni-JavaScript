function smallShop(input) {
  let product = input.shift();
  let city = input.shift();
  let count = Number(input.shift());

  let coffee;
  let water;
  let beer;
  let sweets;
  let peanuts;

  switch (city) {
    case "Sofia":
      coffee = 0.5;
      water = 0.8;
      beer = 1.2;
      sweets = 1.45;
      peanuts = 1.6;
      break;
    case "Plovdiv":
      coffee = 0.4;
      water = 0.7;
      beer = 1.15;
      sweets = 1.3;
      peanuts = 1.5;
      break;
    case "Varna":
      coffee = 0.45;
      water = 0.7;
      beer = 1.1;
      sweets = 1.35;
      peanuts = 1.55;
      break;
  }

  switch (product) {
    case "coffee":
        product=coffee;
        break;
    case "water":
        product=water;
        break;
    case "beer":
        product=beer;
        break;
    case "sweets":
        product=sweets;
        break;
    case "peanuts":
        product=peanuts
        break;
  }

  console.log(`${product*count}`)
}
