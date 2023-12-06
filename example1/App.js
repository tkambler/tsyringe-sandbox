const DB = require('./DB');

/**
 * In this example, the `App` class is "tightly coupled" to the `DB` class. We say this because the `DB` class is a
 * _dependency_ of the `App` class, and the `App` class is responsible for getting an instance of it and instantiating it.
 * 
 * In other words - "tight coupling" === "zero flexibility." App knows (and expects) to use DB, and that's all there is to it.
 */
class App {

    constructor() {
        this.db = new DB();
    }

    run() {
        console.log('Cars:', this.db.getCars());
    }
    
}

module.exports = App;