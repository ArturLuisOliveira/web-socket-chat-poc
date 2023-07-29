import { Server, WebSocket } from "ws";

import { Message } from "./src/models/Message";

const server = new Server({
  port: 8080,
});

let sockets = new Set<WebSocket>();
const messages: Message[] = [];

server.on("connection", function (socket) {
  sockets.add(socket);

  socket.on("message", function (msg) {
    const message = new Message(JSON.parse(msg.toString()));
    messages.push(message);

    sockets.forEach((s) => s.send(message.toString()));
  });

  socket.on("close", function () {
    sockets.delete(socket);
  });
});
