/**
 * This example is a slight improvement over the previous one. In this example, the `App` class is still coupled to the `DB`
 * class, but the coupling is not as _tight_ as it was in the previous example. It still expects to work with a specific
 * implementation of a `DB` class, but it is less-tightly-coupled in the sense that instead of importing this dependency from a
 * specific location (and thus tying it directly to that one specific thing), it now expects to have that dependency _passed
 * in_ by the _consumer_ of the `App` class.
 * 
 * Setting things up this way affords a great deal of flexibility. You could have a version of the `DB` class with a `getCars()`
 * method that fetches that data from PostgreSQL. You could have an alternative version that fetches that data from Redis. Or
 * you could have an alternative version that returns a hard-coded list of cars for testing purposes (i.e. "mock" data).
 * 
 * *This* is the essence of "dependency injection." When people refer to "dependency injection," this concept is all they are
 * referring to. Nothing more. Nothing less.
 * 
 * But... there is a problem here. It's not obvious at first, given how simple this example is.
 * 
 * Imagine a more complicated app. Something like Phosphorus' backend app. In apps like that, there are *a lot* of dependencies.
 * It's not just the top-level `App` class that has dependencies. Its dependencies themselves have dependencies. And *those*
 * dependencies have dependencies of their own.
 * 
 * To create a "loosely coupled" app that's even moderately complex, we're going to need some help. *That* is the role that
 * so-called "dependency injection" libraries fill.
 */
class App {

    constructor(db) {
        this.db = db;
    }

    run() {
        console.log('Cars:', this.db.getCars());
    }
    
}

module.exports = App;