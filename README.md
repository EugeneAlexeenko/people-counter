# People counter

## How to test on local
1. There are 2 ways how to start this project. Run any of these commands from the root directory 
    - `npm start`
    - `docker-compose up` 
    
   Server will start on port `5001`
   Web-client will start on port `3000`


2. Make request to `localhost:5001/update-count` with such a payload, `count` is optional
```
    {
        "roomName": "room1",
        "action": "INCREMENT",
        "count": 3
    }
```
3. If you want to emulate sensors with cli tool, just run `npm run cli` with proper arguments

examples:
```
npm run cli room1 INCREMENT
npm run cli room1 INCREMENT 5
npm run cli room1 DECREMENT
npm run cli room1 DECREMENT 5
```

## Stories

- Create a backend service
  Assumptions: 
    - Service manages rooms and number of people in this rooms
    - Service accepts HTTP requests from sensors
    - Service can provide information about rooms in a real-time via websockets 
  
- Create a CLI client that emulates a sensor
  Assumptions:
    - Tiny nodejs script to send http requests to the main service
    - Accepts 2 parameters: room name and count
  
- Create a web client app 
  - Client can receive real-time data from the main service via websockets
  
- Dockerize
