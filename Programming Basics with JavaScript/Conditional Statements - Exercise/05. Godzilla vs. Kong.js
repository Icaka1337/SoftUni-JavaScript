function godzillaVsKong(input) {
  let budget = Number(input.shift());
  let statistsCount = Number(input.shift());
  let clothingPrice = Number(input.shift());

  let decor = budget * 0.1;
  let priceForClothes = statistsCount * clothingPrice;

  if (statistsCount > 150) {
    priceForClothes *= 0.9;
  }

  let costOfFilm = decor+priceForClothes;

  if (budget>=costOfFilm) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget-costOfFilm).toFixed(2)} leva left.`)
  }
  else{
    console.log("Not enough money!");
    console.log(`Wingard needs ${(costOfFilm-budget).toFixed(2)} leva more.`);
  }
}