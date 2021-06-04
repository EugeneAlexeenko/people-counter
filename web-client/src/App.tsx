import React, { useEffect, useState } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:5001';

function App() {
  const [rooms, setRooms] = useState({});

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('allRooms', (data) => {
      setRooms(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (!Object.keys(rooms).length) {
    return null;
  }

  console.log(rooms);

  return (
    <div>
      {Object.values(rooms).map((room: any) => {
        return (
          <div key={room.name}>
            {room.name} - {room.count}
          </div>
        );
      })}
    </div>
  );
}

export default App;
