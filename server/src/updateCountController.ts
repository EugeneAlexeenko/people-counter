import { Request, Response } from 'express';
import { RoomsDB, ServiceEvents, UpdateActions, UpdateCountDto } from './types';
import { eventEmitter } from './events';
import { roomsDB } from './roomsDB';

const rooms: RoomsDB = roomsDB;

export const updateCountController = (req: Request, res: Response) => {
  console.log(`Message from the sensor: ${JSON.stringify(req.body)}`);

  const { roomName, action, count = 1 } = req.body as UpdateCountDto;

  if (action === UpdateActions.INCREMENT) {
    rooms[roomName].count = rooms[roomName].count + count;
  }

  if (action === UpdateActions.DECREMENT) {
    const newCount = rooms[roomName].count - count;

    rooms[roomName].count = newCount > 0 ? newCount : 0;
  }

  eventEmitter.emit(ServiceEvents.COUNT_CHANGED);

  res.status(200).json({ message: 'Updated' });
};
