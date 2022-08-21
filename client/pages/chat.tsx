import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useEffect, useState } from "react";
import { InfoBar } from "../components/InfoBar";
import { Input } from "../components/Input";
import { Messages } from "../components/Messages";
import { Meta } from "../components/Meta";
import { NextRouter, useRouter } from "next/router";
import { NextPage } from "next";
import { TextContainer } from "../components/TextContainer";
import { User } from "../lib/types";

import io, { Socket } from "socket.io-client";
import styles from "../styles/chat.module.css";
import queryString, { ParsedQuery } from "query-string";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const Chat: NextPage = (): JSX.Element => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [users, setUsers] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const router: NextRouter = useRouter();

	useEffect((): (() => void) => {
		const { name, room }: ParsedQuery<string> = queryString.parse(
			router.asPath.replace("/chat", "")
		);

		if (!name || !room) router.replace(`/500?message=${encodeURIComponent("missing params")}`);
		socket = io(process.env.SOCKET_ENDPOINT);

		setName(name as string);
		setRoom(room as string);

		socket.emit("join", { name, room }, (error: string): void => {
			if (error) {
                router.replace(
					`/500?message=${encodeURIComponent("username taken")}`
				);
			}
		});

		return (): void => {
			socket.disconnect();
			socket.off();
		};
	}, [process.env.SOCKET_ENDPOINT, router.asPath.replace("/chat", "")]);

	useEffect((): void => {
		socket.on("message", (message): void => {
			// @ts-ignore
			setMessages([...messages, message]);
		});

		socket.on("roomData", ({ users }: { users: User[] }): void =>
			setUsers(users as any)
		);
	}, [messages, users]);

	const sendMessage = (event: Event): void => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, (): void => setMessage(""));
		}
	};

	return (
		<>
			<Meta
				title={room !== "" ? `${room} - Sockt` : `The Power of The Chatroom | Sockt`}
				description={room !== "" ? `Welcome to the chat room ${room}, created by ${
					users[0] ? (users[0] as any).name : "no-one"
				} and with ${users.length} current participants.` : "Immerse yourself in the enclosed, private space of the chat room, where limitations are non-existent."}
			/>

			<div className={styles.outerContainer}>
				<div className={styles.container}>
					<InfoBar room={room} />
					<Messages messages={messages} name={name} />
					<Input
						message={message}
						setMessage={setMessage}
						sendMessage={sendMessage}
					/>
				</div>

				<TextContainer users={users} />
			</div>
		</>
	);
};

export default Chat;
