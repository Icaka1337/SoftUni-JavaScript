function passGuess(input){
    let correctPass = "s3cr3t!P@ssw0rd";
    let inputPass = input.shift();

    if (inputPass==correctPass) {
        console.log("Welcome")
    }
    else{
        console.log("Wrong password!")
    }
}