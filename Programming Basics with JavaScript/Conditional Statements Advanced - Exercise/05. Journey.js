function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
  
    let moneySpent;
    let destination;
    let place;
  
    if (season == "summer") {
      place = "Camp";
      if (budget <= 100) {
        moneySpent = budget * 0.3;
        destination = "Bulgaria";
      } else if (budget > 100 && budget <= 1000) {
        moneySpent = budget * 0.4;
        destination = "Balkans";
      } else if (budget > 1000) {
        moneySpent = budget * 0.9;
        destination = "Europe";
      }
      if (destination == "Europe") {
        place = "Hotel";
      }
    } else if (season == "winter") {
      place = "Hotel";
      if (budget <= 100) {
        moneySpent = budget * 0.7;
        destination = "Bulgaria";
      } else if (budget > 100 && budget <= 1000) {
        moneySpent = budget * 0.8;
        destination = "Balkans";
      } else if (budget > 1000) {
        moneySpent = budget * 0.9;
        destination = "Europe";
      }
    }
  
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${moneySpent.toFixed(2)}`);
  }