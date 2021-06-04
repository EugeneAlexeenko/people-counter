import { createServer } from 'http';
import { Server } from 'socket.io';
import { app } from './app';
import { socketListener } from './socketListener';

const port = process.env.PORT || 5001;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socketListener);

const onServerStarted = () => console.log(`Server listening on port ${port}`);
httpServer.listen(port, onServerStarted);
