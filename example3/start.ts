import 'reflect-metadata';
import { container } from 'tsyringe';
import App from './App';

container.resolve(App).run();