function time(input) {
  let hour = Number(input.shift());
  let minute = Number(input.shift())+15;


  if (minute >= 60) {
    minute -= 60;
    hour++;
  }
  if(hour>=24){
    hour-=24;
  }

  if (minute<10) {
    console.log(`${hour}:0${minute}`);
  }
  else{
    console.log(`${hour}:${minute}`)
  }
}