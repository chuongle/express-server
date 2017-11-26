import express from 'express';
import io from 'socket.io-client';
import { NODE_ENV, PORT, PROPERTY_AUTMATION_SYSTEM_URL } from './config';

const app = express();

const server = app.listen(PORT || 3000, () => {
  const { port } = server.address();

  console.log(`Server is now running on port ${port}.`);
});

app.get('*', (req, res) => {
  res.status(200).send('Hello World')
});

let socket = io(PROPERTY_AUTMATION_SYSTEM_URL);

socket.on('connect', function() {
  console.log('Client connected');
});
socket.on('disconnect', function() {
  console.log('Client disconnected');
});

socket.on('action', (data) => {
  console.log('data: ', data);
})