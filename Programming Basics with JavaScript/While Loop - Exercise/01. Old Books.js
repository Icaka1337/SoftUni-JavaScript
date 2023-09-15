function oldBooks (input) {
    let bookToFind = input.shift();
    let searchedBook=input.shift();
    let checkedBooks=0;

    while (searchedBook!="No More Books") {
        if (searchedBook==bookToFind) {
            console.log(`You checked ${checkedBooks} books and found it.`)
            break;
        }
        checkedBooks++;

        searchedBook=input.shift();
    }
    if (searchedBook=="No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`)
    }
}