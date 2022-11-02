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
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.reserveTable();
megaRestaurant.cancelTableReservation();
megaRestaurant.reserveTable();
megaRestaurant.reserveTable();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();

megaRestaurant.close();