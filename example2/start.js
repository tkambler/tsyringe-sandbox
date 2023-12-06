const App = require('./App');
const DB = require('./DB');

const db = new DB();
const app = new App(db);

app.run();