function personalTitle(input){
    let age = Number(input.shift());
    let gender = input.shift();

    if (age >= 16 && gender=='m') {
        console.log("Mr.");
    }else if (age<16&& gender=='m') {
        console.log("Master")
    } else if(age >=16&&gender=='f') {
        console.log("Ms.");
    }else{console.log("Miss")}
}
