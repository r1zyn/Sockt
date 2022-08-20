import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import router from "./router";
import socket from "socket.io";

import {
	addUser,
	getUser,
	removeUser,
	getUsersInRoom,
	getUsers
} from "./users";

dotenv.config({
	path: `${process.cwd()}/.env`
});

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
	}
});

app.use(cors());
app.use(router);

server.listen(port, () => {
	return console.log(
		`[ Socket.io Server ] Server activated, listening on port ${port}`
	);
});

io.on("connection", (socket) => {
	socket.on("join", ({ name, room }, callback) => {
		const { error, user } = addUser({
			id: socket.id,
			name,
			room
		});

		if (error) return callback(error);

		socket.emit("message", {
			user: "System",
			text: `Welcome to "${user?.room as string}", ${
				user?.name as string
			}`
		});

		socket.broadcast.to(user?.room as string).emit("message", {
			user: "System",
			text: `${name} has joined the chatroom!`
		});

		socket.join(user?.room as string);

		io.to(user?.room as string).emit("roomData", {
			room: user?.room,
			users: getUsersInRoom(user?.room as string)
		});

		callback();
	});

	socket.on("sendMessage", (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit("message", { user: user.name, text: message });
		io.to(user.room).emit("roomData", {
			room: user.room,
			users: getUsersInRoom(user.room)
		});

		callback();
	});

    socket.on("getRoomData", (room: string) => {
        getUsersInRoom(room) && getUsersInRoom(room).length > 0 &&
            io.to(room).emit("roomData", {
                room,
                users: getUsersInRoom(room)
            });
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit("message", {
				user: "System",
				text: `${user.name} has left the chatroom.`
			});

			io.to(user.room).emit("roomData", {
				room: user.room,
				users: getUsersInRoom(user.room)
			});
		}
	});
});
