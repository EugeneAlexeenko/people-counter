import { Request, Response, Router } from 'express';
import { RoomsDB, ServiceEvents, UpdateActions } from './types';
import { eventEmitter } from './events';
import { roomsDB } from './roomsDB';

const router = Router();
const rooms: RoomsDB = roomsDB;

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

export { router };
