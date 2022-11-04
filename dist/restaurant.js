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
    changeTableCount(incDec) {
        this.emit(RestaurantEventName.TableCountUpdate, incDec);
    }
    // Stolik został zarezerwowany na teraz
    reserveTable() {
        this.changeTableCount(-1);
    }
    // Odwołano rezerwcję na stolik
    cancelTableReservation() {
        this.changeTableCount(1);
    }
    // Wzięto stolik bez rezerwacji
    takeTableWithoutReservation() {
        this.changeTableCount(-1);
    }
    // Stolik po wyczyszczeniui wraca do użytku
    cleanupTable() {
        this.changeTableCount(1);
    }
}
//# sourceMappingURL=restaurant.js.map