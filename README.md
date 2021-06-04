# People counter

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
