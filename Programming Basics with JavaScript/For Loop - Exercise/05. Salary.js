function salary(input) {
  let n = Number(input.shift());
  let salary = Number(input.shift());

  for (let index = 0; index < n; index++) {
    let site = input.shift();

    if (site == "Facebook") {
      salary -= 150;
    } else if (site == "Instagram") {
      salary -= 100;
    } else if (site == "Reddit") {
      salary -= 50;
    }

    if (salary <= 0) {
      console.log(`You have lost your salary.`);
      break;
    }
  }
  if (salary > 0) {
    console.log(salary.toFixed(0));
  }
}