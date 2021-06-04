import express, { Application, Router, Request, Response } from 'express';
import cors from 'cors';
import { RoomsDB, ServiceEvents, UpdateActions } from './types';
import { roomsDB } from './roomsDB';
import { eventEmitter } from './events';

const app: Application = express();
const router = Router();

const rooms: RoomsDB = roomsDB;

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
    const newCount = rooms[roomName].count - count;

    rooms[roomName].count = newCount > 0 ? newCount : 0;
  }

  eventEmitter.emit(ServiceEvents.COUNT_CHANGED);

  res.status(200).send('Updated');
});

app.use(router);

export { app };
