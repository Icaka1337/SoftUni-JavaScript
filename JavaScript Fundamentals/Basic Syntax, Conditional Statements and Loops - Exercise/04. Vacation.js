function vacation(people, type, day) {
  let price = 0;
  let totalPrice = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      break;
  }
  totalPrice = price * people;
  if (type == "Students" && people >= 30) {
    totalPrice *= 0.85;
  } else if (type == "Business" && people >= 100) {
    totalPrice -= price * 10;
  } else if (type == "Regular" && people >= 10 && people <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}