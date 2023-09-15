function sumofNum(input) {
    let num=String(input.shift());
    let sum=0;
    for (let index = 0; index < num.length; index++) {
        sum+=Number(num[index]);
    }

    console.log(`The sum of the digits is:${sum}`);
}