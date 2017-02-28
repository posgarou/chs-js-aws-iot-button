# Example IoT Application

This repository contains an example application designed for use with Amazon's [IoT Button](https://aws.amazon.com/iotbutton/).

It also contains the presentation for which the application was written (inside `/presentation`). To see the presentation, cd into that directory and run `yarn install && yarn start`, then visit `http://localhost:8080`.

## Setup

Before using this application, you need to take a few steps:

1. Activate and setup your IoT button.
2. Setup an IoT rule to push all messages from your button onto an SQS queue.
3. Run `cp server/.env.sample server/.env` and define the three variables specified. (You may also define these via the command line or via `docker-compose.yml`.

## Running

Once all that is done, you can start the client and server here. To start, run `docker-compose up --build`. (You may need to upgrade your version of Docker.)

Once the two docker images are running, just visit [http://localhost:3000] to view the client app.

## Overview

The server here consists of two parts, an SQS long-poller and a socket.io application. The client is a React app (backed by next.js) that connects to the socket.io backend on load.

Each time a user interacts with the IoT button, the following actions take place:

1. The IoT button communicates with Amazon that a click, double click, or long press took place.
2. Amazon, due to an IoT rule, places this event onto an SQS queue.
3. Meanwhile, this server is continually long-polling for events. As soon as one is placed on the queue, the long poll completes.
4. Once an event is pulled off the SQS queue, the server notifies all connected socket.io clients of the event.
5. Whenever a socket.io event streams into the client, the client application prepends it to the list of events.
