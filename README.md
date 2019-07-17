# Financer
A financing application built with the MERN stack.

## Quick Start
### Prerequisites
* NodeJS
* MongoDB database

### Installation
``` bash
npm install
```
After installing, edit ```server/config.js.example``` to contain the MongoDB link information.
Rename the file to **config.js**.

### Running
Starting the application uses ```concurrently``` to run both the Node server and React frontend.
``` bash
npm start
```

## Client
The client side functions using the React framework with Redux for state management.

## Server
The server side operates with a Node server with Express and Mongoose. A Mongo database lives on the cloud.