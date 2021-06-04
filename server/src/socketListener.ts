import { Socket } from 'socket.io';
import { eventEmitter } from './events';
import { RoomsDB, ServiceEvents } from './types';
import { roomsDB } from './roomsDB';

const rooms: RoomsDB = roomsDB;

export const socketListener = (socket: Socket) => {
  console.log('Client connected');

  eventEmitter.on(ServiceEvents.COUNT_CHANGED, () => {
    socket.emit('allRooms', rooms);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
};
