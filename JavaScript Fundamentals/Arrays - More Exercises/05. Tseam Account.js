function tseamAccount(arr) {
    let games = arr.shift().split(' ');
    while (arr[0] !== 'Play!') {
        let cmnd = arr.shift().split(' ');

        if (cmnd[0] === 'Install') {
            if (!games.includes(cmnd[1])) {
                games.push(cmnd[1]);
            }
        } else if (cmnd[0] === 'Uninstall') {
            if (games.includes(cmnd[1])) {
                games.splice(games.indexOf(cmnd[1]), 1);
            }
        } else if (cmnd[0] === 'Update') {
            if (games.includes(cmnd[1])) {
                games.splice(games.indexOf(cmnd[1]), 1);
                games.push(cmnd[1]);
            }
        } else if (cmnd[0] === 'Expansion') {
            let game = cmnd[1].split('-');
            if (games.includes(game[0])) {
                games.splice(games.indexOf(game[0]) + 1, 0, game.join(':'));
            }
        }
    }
    console.log(games.join(' '));
}