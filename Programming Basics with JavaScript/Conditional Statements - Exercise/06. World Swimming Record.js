function swimmingRecord(input) {
  let record = Number(input.shift());
  let range = Number(input.shift());
  let swimTime = Number(input.shift());

  let gettingSlower = 0;
  if (range >= 15) {
    gettingSlower = Math.floor(range / 15) * 12.5;
  }

  let runTime = (range*swimTime) + gettingSlower;

  if (runTime<record) {
    console.log(`Yes, he succeeded! The new world record is ${runTime.toFixed(2)} seconds.`);
  }
  else{
    console.log(`No, he failed! He was ${(runTime-record).toFixed(2)} seconds slower.`)
  }
}