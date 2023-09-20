function cinemaTickets(input) {
    let filmName = input.shift();
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    while (filmName !== 'Finish') {
        let freeSeats = Number(input.shift());
        let ticketType = input.shift();
        let currentTickets = 0;
        while (ticketType !== 'End') {
            switch (ticketType) {
                case 'student': studentTickets++; break;
                case 'standard': standardTickets++; break;
                case 'kid': kidTickets++; break;
            }
            currentTickets++;
            totalTickets++;
            if (currentTickets === freeSeats) {
                break;
            }
            ticketType = input.shift();
        }
        console.log(`${filmName} - ${(currentTickets / freeSeats * 100).toFixed(2)}% full.`);
        filmName = input.shift();
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}