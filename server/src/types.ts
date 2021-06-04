export type Room = {
  name: string;
  count: number;
};

export type RoomsDB = {
  [roomName: string]: Room;
};

export enum UpdateActions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export type UpdateCountDto = {
  roomName: string;
  action: UpdateActions;
  count?: number;
};

export enum ServiceEvents {
  'COUNT_CHANGED' = 'COUNT_CHANGED'
}
