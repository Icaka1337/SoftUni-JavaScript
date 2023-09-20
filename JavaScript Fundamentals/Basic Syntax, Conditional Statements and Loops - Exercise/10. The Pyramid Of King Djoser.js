function thePyramidOfKingDjoser (base,increment) {
    let totalHeight = 0;
    let steps = 0;
    let stones = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let currentBase = base;
    while (currentBase > 2) {
        stones += (currentBase - 2) * (currentBase - 2) * increment;
        steps++;
        if (steps % 5 == 0) {
            lapis += (currentBase * currentBase - (currentBase - 2) * (currentBase - 2)) * increment;
        } else {
            marble += (currentBase * currentBase - (currentBase - 2) * (currentBase - 2)) * increment;
        }
        currentBase -= 2;
    }
    steps++;
    gold = currentBase * currentBase * increment;
    totalHeight = steps * increment;
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}