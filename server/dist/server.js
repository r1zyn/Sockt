"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const router_1 = __importDefault(require("./router"));
const socket_io_1 = __importDefault(require("socket.io"));
const users_1 = require("./users");
dotenv_1.default.config({
    path: `${process.cwd()}/.env`
});
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});
app.use((0, cors_1.default)());
app.use(router_1.default);
server.listen(port, () => {
    return console.log(`[ Socket.io Server ] Server activated, listening on port ${port}`);
});
io.on("connection", (socket) => {
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = (0, users_1.addUser)({
            id: socket.id,
            name,
            room
        });
        if (error)
            return callback(error);
        socket.emit("message", {
            user: "System",
            text: `Welcome to "${user === null || user === void 0 ? void 0 : user.room}", ${user === null || user === void 0 ? void 0 : user.name}`
        });
        socket.broadcast.to(user === null || user === void 0 ? void 0 : user.room).emit("message", {
            user: "System",
            text: `${name} has joined the chatroom!`
        });
        socket.join(user === null || user === void 0 ? void 0 : user.room);
        io.to(user === null || user === void 0 ? void 0 : user.room).emit("roomData", {
            room: user === null || user === void 0 ? void 0 : user.room,
            users: (0, users_1.getUsersInRoom)(user === null || user === void 0 ? void 0 : user.room)
        });
        callback();
    });
    socket.on("sendMessage", (message, callback) => {
        const user = (0, users_1.getUser)(socket.id);
        io.to(user.room).emit("message", { user: user.name, text: message });
        io.to(user.room).emit("roomData", {
            room: user.room,
            users: (0, users_1.getUsersInRoom)(user.room)
        });
        callback();
    });
    socket.on("getRoomData", (room) => {
        (0, users_1.getUsersInRoom)(room) && (0, users_1.getUsersInRoom)(room).length > 0 &&
            io.to(room).emit("roomData", {
                room,
                users: (0, users_1.getUsersInRoom)(room)
            });
    });
    socket.on("disconnect", () => {
        const user = (0, users_1.removeUser)(socket.id);
        if (user) {
            io.to(user.room).emit("message", {
                user: "System",
                text: `${user.name} has left the chatroom.`
            });
            io.to(user.room).emit("roomData", {
                room: user.room,
                users: (0, users_1.getUsersInRoom)(user.room)
            });
        }
    });
});
//# sourceMappingURL=server.js.map