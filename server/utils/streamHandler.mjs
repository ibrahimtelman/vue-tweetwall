const handler = (stream, io) => {
  // When tweets get sent our way ...
  stream.on('data', (data) => {
    io.emit('new-tweet', data);
  });
};

export default handler;
