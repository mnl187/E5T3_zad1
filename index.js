const {Restaurant} = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .on('open', () => console.log('Otwarto restaurację.'))
    .on('close', () => console.log('Zamknieto restaurację.'))
    .on('tableCountUpdate', change => {
        tablesCount += change;
        console.log(`Dostępnych stolików ${tablesCount}.`);
    });

megaRestaurant.open();


megaRestaurant.reserveTable();
megaRestaurant.cancelTableReservation();


megaRestaurant.close();