function vacation(input) {
  let pagesCount = Number(input.shift());
  let pagesPerHour = Number(input.shift());
  let daysToRead = Number(input.shift());

  let totalHours = pagesCount / pagesPerHour;

  let hoursPerDay = totalHours / daysToRead;

  console.log(hoursPerDay);
}