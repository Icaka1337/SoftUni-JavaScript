function readText (input) {
    while (true) {
    let text=input.shift();
    if (text=="Stop") {
        break;
    }
    console.log(text);
    }
}