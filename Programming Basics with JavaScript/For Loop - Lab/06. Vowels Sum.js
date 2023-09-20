function vowelsSum(input) {
  let text = input.shift();
  let sum = 0;

  for (const element of text) {
    switch (element) {
      case "a":
        sum += 1;
        break;
      case "e":
        sum += 2;
        break;
      case "i":
        sum += 3;
        break;
      case "o":
        sum += 4;
        break;
      case "u":
        sum += 5;
        break;
    }
  }

  console.log(sum);
}