function newHouse(input) {
    let flowerType = input.shift();
    let flowerCount = Number(input.shift());
    let budget = Number(input.shift());
  
    let totalPrice;
    switch (flowerType) {
      case "Roses":
        totalPrice = 5 * flowerCount;
        if (flowerCount > 80) {
          totalPrice *= 0.9;
        }
        break;
      case "Dahlias":
        totalPrice = 3.8 * flowerCount;
        if (flowerCount > 90) {
          totalPrice *= 0.85;
        }
        break;
      case "Tulips":
        totalPrice = 2.8 * flowerCount;
        if (flowerCount > 80) {
          totalPrice *= 0.85;
        }
        break;
      case "Narcissus":
        totalPrice = 3 * flowerCount;
        if (flowerCount < 120) {
          totalPrice *= 1.15;
        }
        break;
      case "Gladiolus":
        totalPrice = 2.5 * flowerCount;
        if (flowerCount < 80) {
          totalPrice *= 1.2;
        }
    }
  
    if (budget>=totalPrice) {
      console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget-totalPrice).toFixed(2)} leva left.`)
    }else{
      console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`)
    }
  }