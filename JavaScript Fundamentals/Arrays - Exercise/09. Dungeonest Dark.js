function dungeonDark(arr) {
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    let rooms = arr.shift().split('|');
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        if (room[0] == "potion") {
            if (health + Number(room[1]) > 100) {

                console.log(`You healed for ${100 - health} hp.`)
                health = 100;
                console.log(`Current health: ${health} hp.`)
            } else {
                health += Number(room[1]);
                console.log(`You healed for ${room[1]} hp.`)
                console.log(`Current health: ${health} hp.`)

            }
        } else if (room[0] == "chest") {
            coins += Number(room[1]);
            console.log(`You found ${room[1]} coins.`)
        } else {
            health -= room[1];
            if (health > 0) {
                console.log(`You slayed ${room[0]}.`)
            } else {
                console.log(`You died! Killed by ${room[0]}.`)
                console.log(`Best room: ${bestRoom}`)
                isDead = true;
                break;
            }
        }
        bestRoom++;
    }
    if (!isDead) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}