let express = require("express");
let app = express();
let WebSocket = require('ws');// 需要安装npm install ws
let wss = new WebSocket.Server({ port: 3000 });
wss.on("connection", function (ws) {
    ws.on("message", function (data) {
        console.log(data);
        ws.send("nhao");
    });
});