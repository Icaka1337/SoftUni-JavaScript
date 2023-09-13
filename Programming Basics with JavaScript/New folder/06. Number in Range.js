function numbersInRange(input){
    let interval = Number(input.shift());

    if (interval>= -100 && interval<=100 && interval!=0) {
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}