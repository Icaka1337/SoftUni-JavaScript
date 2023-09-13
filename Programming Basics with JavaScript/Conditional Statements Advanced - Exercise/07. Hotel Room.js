function hotelRoom(input) {
    let month = input.shift();
    let nightsCount = Number(input.shift());
  
    let studioPrice;
    let apartmentPrice;
  
    if (month == "May" || month == "October") {
      studioPrice = 50;
      apartmentPrice = 65;
  
      if (nightsCount > 7 && nightsCount <= 14) {
        studioPrice *= 0.95;
      } else if (nightsCount > 14) {
        studioPrice *= 0.7;
        apartmentPrice *= 0.9;
      }
    } else if (month == "June" || month == "September") {
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      if (nightsCount > 14) {
        studioPrice *= 0.8;
        apartmentPrice *= 0.9;
      }
    } else if (month == "July" || month == "August") {
      studioPrice = 76;
      apartmentPrice = 77;
      if (nightsCount > 14) {
        apartmentPrice *= 0.9;
      }
    }
  
    let apartmentTotal = apartmentPrice * nightsCount;
    let studioTotal = studioPrice * nightsCount;
  
    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
  }