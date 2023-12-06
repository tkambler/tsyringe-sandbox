import { inject, injectable } from 'tsyringe';
import DB from './DB';

/**
 * In this example, we've introduced a library called "tsyringe." Libraries of this type are often referred to as
 * dependency injection "containers" (you'll see why soon).
 * 
 * We're using some new syntax here that may be unfamiliar to you. The references that you see to `@injectable()`
 * and `@inject()` are known as "decorators." Let's avoid a conversation on that topic (for now). For the moment,
 * let's just focus on what they _do_.
 * 
 * The `injectable()` decorator flags this class as something that TSyringe should keep track of. The `inject()`
 * decorator tell
 */
@injectable()
class App {

    public constructor(
        @inject(DB) private db: DB,
    ) {}

    run() {
        console.log('Cars:', this.db.getCars());
    }

}

export default App;