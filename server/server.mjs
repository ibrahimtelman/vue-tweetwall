import express from 'express';
import http from 'http';
import twitter from 'ntwitter';
import socket_io from 'socket.io';
import streamHandler from './utils/streamHandler';

const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  res.send('hello world');
});

const twit = twitter({
  consumer_key: 'eODYttL7ORTCgSlVXSqaRDaNq',
  consumer_secret: 'JBLgjPc2c50AKmlSUBlkGWSdm1xw8ZjINsiaaIxKgJj5FDnxbh',
  access_token_key: '480235334-aa0n75zpTcwbWJGOgUNx3RYy3KSmuf6LOVh7l3eV',
  access_token_secret: '15gFUP32k8Nw9SwbbUvJkZQlubO5jM4ABTLlOTq1csiqK',
});

const server = http.createServer(app)
  .listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });

const io = socket_io.listen(server);

io.on('connection', (socket) => {
  let twitStream = null;

  socket.on('start-stream', () => {
    twit.stream('statuses/filter', { track: '#computer' }, (stream) => {
      twitStream = stream;
      streamHandler(stream, io);
    });
  });

  socket.on('stop-stream', () => {
    twitStream.destroy();
  });

  socket.on('disconnect', () => {
    if (twitStream) {
      twitStream.destroy();
    }
  });
});

