import { Restaurant } from "./restaurant";
import { RestaurantEventName } from "./types/restaurant-events";
const megaRestaurant = new Restaurant();
let tablesCount = 25;
megaRestaurant
    .on(RestaurantEventName.Open, () => console.log('Otwarto restaurację.'))
    .on(RestaurantEventName.Close, () => console.log('Zamknieto restaurację.'))
    .on(RestaurantEventName.TableCountUpdate, (change => {
    tablesCount += change;
    console.log(`Dostępnych stolików ${tablesCount}.`);
}));
megaRestaurant.open();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.reserveTable();
megaRestaurant.cancelTableReservation();
megaRestaurant.reserveTable();
megaRestaurant.reserveTable();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.takeTableWithoutReservation();
megaRestaurant.cleanupTable();
megaRestaurant.close();
//# sourceMappingURL=index.js.map