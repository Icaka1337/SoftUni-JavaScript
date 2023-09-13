function workingHours(input) {
  let hour = Number(input.shift());
  let day = input.shift();

  if (hour >= 10 && hour <= 18) {
    if (
      day == "Monday" ||
      day == "Tuesday" ||
      day == "Wednesday" ||
      day == "Thursday" ||
      day == "Friday" ||
      day == "Saturday"
    ) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else {
    console.log("closed");
  }
}
