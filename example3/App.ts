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
 * decorator tells TSyringe that it wants an instance of a dependency. Rather that instantiate it _ourselves_
 * (e.g. new DB()) - TSyringe is going to take care of that for us.
 * 
 * See `./start.ts`.
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
