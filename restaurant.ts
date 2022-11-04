import {EventEmitter} from "events";
import {RestaurantEventName} from "./types/restaurant-events";

export class Restaurant extends EventEmitter {
    // Otwarcie restauracji
    
    open() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Open);
    }
    // Zamknięcie restauracji
    close() {
        (this.emit as RestaurantEvent)(RestaurantEventName.Close);
    }

    private changeTableCount(incDec: number) {
        (this.emit as RestaurantTableCountChangeEvent)(RestaurantEventName.TableCountUpdate, incDec)
    }

    // Stolik został zarezerwowany na teraz
    reserveTable() {
        this.changeTableCount( -1);
    }
    // Odwołano rezerwcję na stolik
    cancelTableReservation() {
        this.changeTableCount( 1);
    }
    // Wzięto stolik bez rezerwacji
    takeTableWithoutReservation() {
        this.changeTableCount( -1);
    }
    // Stolik po wyczyszczeniui wraca do użytku
    cleanupTable() {
        this.changeTableCount( 1);
    }
}

export type RestaurantEvent = (eventName: RestaurantEventName) => boolean;
export type RestaurantTableCountChangeEvent = (eventName: RestaurantEventName.TableCountUpdate, incDec: number) => boolean;
export type RestaurantTableCountChangeCallback = (incDec: number) => void;
