function triangleOfNumbers (input) {
      let num = Number(input);
  let counter = 1;
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= counter; j++) {
      line += `${i} `;
    }
    console.log(line);
    counter++;
  }
}