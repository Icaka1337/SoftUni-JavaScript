function multiplicationTable(input) {
  let num = Number(input.shift());

  for (let index = 1; index <= 10; index++) {
    console.log(`${index} * ${num} = ${index * num}`);
  }
}