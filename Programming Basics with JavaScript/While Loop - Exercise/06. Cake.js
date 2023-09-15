function cake(input) {
    let width = input.shift();
    let height = input.shift();

    let totalPieces = width * height;
    let takenPieces = input.shift();

    while (takenPieces != "STOP") {
        if (totalPieces <= 0) {
            break;
        }
        totalPieces -= takenPieces;
        takenPieces = input.shift();
    }

    if (takenPieces == "STOP" && totalPieces > 0) {
        console.log(`${totalPieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`)
    }
}