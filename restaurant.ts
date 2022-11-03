import {EventEmitter} from "events";

export class Restaurant extends EventEmitter {
    // Otwarcie restauracji
    
    open() {
        this.emit('open');
    }
    // Zamknięcie restauracji
    close() {
        this.emit('close');
    }
    // Stolik został zarezerwowany na teraz
    reserveTable() {
        this.emit('tableCountUpdate', -1);
    }
    // Odwołano rezerwcję na stolik
    cancelTableReservation() {
        this.emit('tableCountUpdate', 1);
    }
    // Wzięto stolik bez rezerwacji
    takeTableWithoutReservation() {
        this.emit('tableCountUpdate', -1);
    }
    // Stolik po wyczyszczeniui wraca do użytku
    cleanupTable() {
        this.emit('tableCountUpdate', 1);
    }
}