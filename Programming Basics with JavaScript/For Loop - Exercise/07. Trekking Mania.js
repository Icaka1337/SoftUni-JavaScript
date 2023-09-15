function trekkingMania(input) {
    let groupsCount = Number(input.shift());

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let index = 0; index < groupsCount; index++) {
        let group = Number(input.shift());
        totalPeople += group;

        if (group <= 5) {
            musala += group;
        } else if (group > 5 && group <= 12) {
            monblan += group;
        } else if (group > 5 && group <= 25) {
            kilimanjaro += group;
        } else if (group > 25 && group <= 40) {
            k2 += group;
        } else {
            everest += group;
        }
    }

    musala = (musala / totalPeople) * 100;
    monblan = (monblan / totalPeople) * 100;
    kilimanjaro = (kilimanjaro / totalPeople) * 100;
    k2 = (k2 / totalPeople) * 100;
    everest = (everest / totalPeople) * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`)
    console.log(`${kilimanjaro.toFixed(2)}%`)
    console.log(`${k2.toFixed(2)}%`)
    console.log(`${everest.toFixed(2)}%`)

}