import express from 'express';
import { NODE_ENV, PORT } from './config';

const app = express();

const server = app.listen(PORT || 3000, () => {
  const { port } = server.address();

  console.log(`Server is now running on port ${port}.`);
});

app.get('*', (req, res) => {
  res.status(200).send('Hello World')
});