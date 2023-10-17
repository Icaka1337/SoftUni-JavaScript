function addAndRemove(arr) {
    let count = [];
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            count.push(n);
        } else {
            count.pop();
        }
        n++;
    }
    if (count.length == 0) {
        console.log("Empty")
    } else {
        console.log(count.join(" "))
    }
}