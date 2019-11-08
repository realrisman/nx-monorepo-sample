/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { addProductRoutes } from './app/products';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
addProductRoutes(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
