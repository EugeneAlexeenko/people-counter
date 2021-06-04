import { EventEmitter } from 'events';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import express, { Application, Router, Request, Response } from 'express';
import cors from 'cors';

const port = process.env.PORT || 5001;
const app: Application = express();
const router = Router();

const eventEmitter = new EventEmitter();

type Room = {
  name: string;
  count: number;
};

type RoomsDB = {
  [roomName: string]: Room;
};

enum UpdateActions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

enum ServiceEvents {
  'COUNT_CHANGED' = 'COUNT_CHANGED'
}

const rooms: RoomsDB = {
  room1: {
    name: 'room1',
    count: 0
  },
  room2: {
    name: 'room2',
    count: 0
  }
};

app.use(cors());
app.use(express.json());

router.get('/', (req: Request, res: Response) => {
  res.status(200).send('ok');
});

router.put('/update-count', (req: Request, res: Response) => {
  console.log(`Message from the sensor: ${JSON.stringify(req.body)}`);

  const { roomName, action, count = 1 } = req.body;

  if (action === UpdateActions.INCREMENT) {
    rooms[roomName].count = rooms[roomName].count + count;
  }

  if (action === UpdateActions.DECREMENT) {
    rooms[roomName].count = rooms[roomName].count - count;
  }

  eventEmitter.emit(ServiceEvents.COUNT_CHANGED);

  res.status(200).send('Updated');
});

app.use(router);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket: Socket) => {
  console.log('Client connected');

  eventEmitter.on(ServiceEvents.COUNT_CHANGED, () => {
    socket.emit('allRooms', rooms);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const onServerStarted = () => console.log(`Server listening on port ${port}`);
httpServer.listen(port, onServerStarted);
