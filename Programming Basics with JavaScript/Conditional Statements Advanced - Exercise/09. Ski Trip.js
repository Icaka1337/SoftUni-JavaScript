function skiTrip(input) {
    let days = Number(input.shift());
    let place = input.shift();
    let review = input.shift();
  
    let onePersonRoom = 18;
    let apartment = 25;
    let presidentApartment = 35;
  
    if (days < 10) {
      apartment *= 0.7;
      presidentApartment *= 0.9;
    } else if (days >= 10 && days <= 15) {
      apartment *= 0.65;
      presidentApartment *= 0.85;
    } else {
      apartment *= 0.5;
      presidentApartment *= 0.8;
    }
  
    if (review == "positive") {
      onePersonRoom *= 1.25;
      apartment *= 1.25;
      presidentApartment *= 1.25;
    } else {
      onePersonRoom *= 0.9;
      apartment *= 0.9;
      presidentApartment *= 0.9;
    }
  
    days--;
    let price;
  
    if (place == "room for one person") {
      price = onePersonRoom * days;
    } else if (place == "apartment") {
      price = apartment * days;
    } else if (place == "president apartment") {
      price = presidentApartment * days;
    }
  
    console.log(price.toFixed(2));
  }