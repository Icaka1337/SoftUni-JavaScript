function specialNumbers(specialNumber) {
  let num;
  for (let i = 1; i <= specialNumber; i++) {
    let sum = 0;
    num = i;
    while (num>0) {
        sum+= num%10;
        num=Math.trunc(num/10);
    }
    if (sum==5||sum==7||sum==11) {
        console.log(`${i} -> True`)
    }else {
        console.log(`${i} -> False`)
    }
  }
}