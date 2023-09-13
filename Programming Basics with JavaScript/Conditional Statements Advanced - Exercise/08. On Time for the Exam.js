function onTime(input) {
    let hourExam = Number(input.shift());
    let minuteExam = Number(input.shift());
    let hourArrival = Number(input.shift());
    let minuteArrival = Number(input.shift());
  
    let examTotalMinutes = hourExam * 60 + minuteExam;
    let arrivalTotalMinutes = hourArrival * 60 + minuteArrival;
  
    let timeDifference = examTotalMinutes - arrivalTotalMinutes;
  
    if (timeDifference < 0) {
      console.log(`Late`);
      let timeAbsolute = Math.abs(timeDifference);
  
      if (timeAbsolute < 60) {
        console.log(`${timeAbsolute} minutes after the start`);
      } else {
        let hour = Math.floor(timeAbsolute / 60);
        let minute = timeAbsolute % 60;
  
        if (minute < 10) {
          console.log(`${hour}:0${minute} hours after the start`);
        }
        console.log(`${hour}:${minute} hours after the start`);
      }
    } else if (timeDifference > 30) {
      console.log(`Early`);
      if (timeDifference < 60) {
        console.log(`${timeDifference} minutes before the start`);
      } else {
        let hour = Math.floor(timeDifference / 60);
        let minute = timeDifference % 60;
        if (minute < 10) {
          console.log(`${hour}:0${minute} hours before the start`);
        }
        console.log(`${hour}:${minute} hours before the start`);
      }
    } else {
      console.log(`On Time`);
      if (timeDifference > 0) {
        console.log(`${timeDifference} minutes before the start`);
      }
    }
  }