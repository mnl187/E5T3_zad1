import { EventEmitter } from "events";
import { RestaurantEventName } from "./types/restaurant-events";
export class Restaurant extends EventEmitter {
    // Otwarcie restauracji
    open() {
        this.emit(RestaurantEventName.Open);
    }
    // Zamknięcie restauracji
    close() {
        this.emit(RestaurantEventName.Close);
    }
    // Stolik został zarezerwowany na teraz
    reserveTable() {
        this.emit(RestaurantEventName.TableCountUpdate, -1);
    }
    // Odwołano rezerwcję na stolik
    cancelTableReservation() {
        this.emit(RestaurantEventName.TableCountUpdate, 1);
    }
    // Wzięto stolik bez rezerwacji
    takeTableWithoutReservation() {
        this.emit(RestaurantEventName.TableCountUpdate, -1);
    }
    // Stolik po wyczyszczeniui wraca do użytku
    cleanupTable() {
        this.emit(RestaurantEventName.TableCountUpdate, 1);
    }
}
//# sourceMappingURL=restaurant.js.map