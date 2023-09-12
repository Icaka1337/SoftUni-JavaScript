function fishTank(input){
    let long = Number(input.shift());
    let wide = Number(input.shift());
    let heigth = Number(input.shift());
    let percent = Number(input.shift())/100;

    let litres = (long*wide*heigth)/1000;

   let neededLitres = litres * (1-percent);

   console.log(neededLitres);
}