import express from 'express';
import http from 'http';
import twitter from 'ntwitter';
import path from 'path';
import socket_io from 'socket.io';
import streamHandler from './utils/streamHandler';
import twitter_config from './configs/twitter';

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendfile(path.resolve('./dist/index.html'));
});

const twit = twitter(twitter_config);

const server = http.createServer(app)
  .listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });

const io = socket_io.listen(server);

io.on('connection', (socket) => {
  let twitStream = null;

  socket.on('start-stream', (data, fn) => {
    twit.stream('statuses/filter', { track: data.query }, (stream) => {
      twitStream = stream;
      streamHandler(stream, socket);
    });
    fn(true);
  });

  socket.on('stop-stream', (data, fn) => {
    twitStream.destroy();
    fn(true);
  });

  socket.on('disconnect', () => {
    if (twitStream) {
      twitStream.destroy();
    }
  });
});

