function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishersCount = Number(input.shift());
  
    let rentingPrice;
  
    switch (season) {
      case "Spring":
        rentingPrice = 3000;
        break;
      case "Summer":
      case "Autumn":
        rentingPrice = 4200;
        break;
      case "Winter":
        rentingPrice = 2600;
        break;
    }
  
    if (fishersCount <= 6) {
      rentingPrice *= 0.9;
    } else if (fishersCount >= 7 && fishersCount <= 11) {
      rentingPrice *= 0.85;
    } else if (fishersCount > 11) {
      rentingPrice *= 0.75;
    }
  
    if (fishersCount % 2 == 0 && season!="Autumn") {
      rentingPrice *= 0.95;
    }
  
    if (budget>=rentingPrice) {
      console.log(`Yes! You have ${(budget-rentingPrice).toFixed(2)} leva left.`)
    }
    else{
      console.log(`Not enough money! You need ${(rentingPrice-budget).toFixed(2)} leva.`)
    }
  }