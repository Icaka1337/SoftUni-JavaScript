function sumSeconds(input) {
  let first = Number(input.shift());
  let second = Number(input.shift());
  let third = Number(input.shift());
  let sum = first + second + third;
  let minutes = Math.floor(sum / 60);
  let seconds = sum % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
