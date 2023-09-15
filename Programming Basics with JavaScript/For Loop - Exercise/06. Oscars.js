function oscars(input) {
  let name = input.shift();
  let startingPoints = Number(input.shift());
  let juryCount = Number(input.shift());
  let totalPoints = 0;

  for (let index = 0; index < juryCount; index++) {
    let juryName = input.shift();
    totalPoints = startingPoints + (Number(input.shift()) * juryName.length) / 2;
    startingPoints = totalPoints;

    if (totalPoints > 1250.5) {
      console.log(`Congratulations, ${name} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
      break;
    }
  }

  if (totalPoints < 1250.5) {
    console.log(`Sorry, ${name} you need ${(1250.5 - startingPoints).toFixed(1)} more!`);
  }
}