function lunchBreak(input) {
  let serialName = input.shift();
  let episodeLength = Number(input.shift());
  let breakLength = Number(input.shift());

  let lunchTime = breakLength/8;
  let focusingTime = breakLength/4;

  let timeLeft =breakLength-lunchTime-focusingTime;

  if (timeLeft>=episodeLength) {
    console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft-episodeLength)} minutes free time.`)
  }else{
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength-timeLeft)} more minutes.`)
  }
}