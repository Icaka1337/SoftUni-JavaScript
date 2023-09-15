function moving(input) {
    let width = input.shift();
    let length = input.shift();
    let height = input.shift();

    let totalSpace = width * length * height;

    let boxesCount=input.shift();

    while (boxesCount!="Done") {
        if (totalSpace<0) {
            break;
        }
        totalSpace-=boxesCount;
        boxesCount=input.shift();
    }

    if (boxesCount=="Done"&&totalSpace>0) {
        console.log(`${totalSpace} Cubic meters left.`)
    }else {
        console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`)
    }
}