function login (input) {
    let username = input.shift();
    let password = username.split("").reverse().join("");
    console.log(password)
}