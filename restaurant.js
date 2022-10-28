const { EventEmitter }= require('events');

class Restaurant extends EventEmitter {
    // Otwarcie restauracji
    
    open() {
        this.emit('open');
    }
    // Zamknięcie restauracji
    close() {
        this.emit('close');
    }
}