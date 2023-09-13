function evenPowers(input) {
  let n = Number(input.shift());
  let num = 1;

  for (let index = 0; index <= n; index++) {
    if (index % 2 == 0) {
      console.log(num);
    }
    num *= 2;
  }
}