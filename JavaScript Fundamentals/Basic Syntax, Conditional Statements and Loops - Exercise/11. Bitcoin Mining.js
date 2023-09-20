function bitcoinMining(input) {
  let day = 0;
  let bitcoin = 0;
  let totalMoney = 0;
  let firstBitcoin = 0;
  let count = 0;
  for (const element of input) {
    day++;
    let gold = element;
    if (day % 3 === 0) {
      gold *= 0.7;
    }
    totalMoney += gold * 67.51;
    if (totalMoney >= 11949.16) {
      count++;
      if (count === 1) {
        firstBitcoin = day;
      }
      while (totalMoney >= 11949.16) {
        bitcoin++;
        totalMoney -= 11949.16;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}