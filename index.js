const {Restaurant} = require('./restaurant');

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
    .on('open', () => console.log('Otwarto restaurację.'))
    .on('close', () => console.log('Zamknieto restaurację.'))

megaRestaurant.open();
megaRestaurant.close();