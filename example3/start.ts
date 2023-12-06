import 'reflect-metadata';
import { container } from 'tsyringe';
import App from './App';

/**
 * Rather than creating a new instance of `App` ourselves, we're going to let TSyringe do that for us.
 * 
 * Notice how we're registering a `settings` dependency which our DB class is later able to reference
 * by name (withing us having to pass it directly into it).
 * 
 * See `./App.ts`.
 */
container.register('settings', {
  useValue: {
    db: {
      host: 'localhost',
      username: 'foo',
      password: 'bar',
      port: 5432,
    },
  },
});

container.resolve(App).run();
