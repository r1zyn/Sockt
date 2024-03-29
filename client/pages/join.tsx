import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState
} from "react";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { MainContainer } from "../components/MainContainer";
import { Meta } from "../components/Meta";
import { NextPage } from "next";
import { Polygon } from "../components/Polygon";
import { PolgyonContainer } from "../components/PolygonContainer";
import { User } from "../lib/types";

import io, { Socket } from "socket.io-client";
import styles from "../styles/join.module.css";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const Join: NextPage = (): JSX.Element => {
	const [name, setName]: [string, Dispatch<SetStateAction<string>>] =
		useState("");
	const [room, setRoom]: [string, Dispatch<SetStateAction<string>>] =
		useState("");
	const [users, setUsers]: [any, Dispatch<SetStateAction<any>>] = useState(
		[]
	);

	useEffect((): void => {
		socket = io(process.env.SOCKET_ENDPOINT);

		socket.on("roomData", ({ users }: { users: User[] }): void =>
			setUsers(users as any)
		);
	}, [users]);

	return (
		<>
			<Meta
				title="The Portal To Immersation | Sockt."
				description="Start chatting with your friends by creating or joining a chatroom. Choose a username and create a new chatroom or join an existing chatroom."
			/>

			<PolgyonContainer>
				<Polygon
					style={{
						height: "100%"
					}}
				/>
			</PolgyonContainer>

			<MainContainer>
				<div className={styles.joinOuterContainer}>
					<form
						className={styles.joinInnerContainer}
						onSubmit={(event: FormEvent<HTMLFormElement>): void => {
							event.preventDefault();
							socket.emit("getRoomData", room);

							if (
								users.find(
									(user: User): boolean => user.name === name
								)
							) {
								return alert(
									"Name is taken, please choose another name."
								);
							}

							window.location.replace(
								`/chat?name=${name}&room=${room}`
							);
						}}>
						<h1 className={styles.heading}>Join</h1>
						<div>
							<input
								placeholder="Name"
								className={styles.joinInput}
								type="text"
								required
								onChange={(
									event: ChangeEvent<HTMLInputElement>
								): void => setName(event.target.value)}
							/>
						</div>

						<div>
							<input
								placeholder="Room name"
								className={`${styles.joinInput} ${styles["mt-20"]}`}
								type="text"
								required
								onChange={(
									event: ChangeEvent<HTMLInputElement>
								): void => setRoom(event.target.value)}
							/>
						</div>

						<button
							className={`${styles.button} ${styles["mt-20"]}`}
							type="submit">
							Enter Room
						</button>
					</form>
				</div>
			</MainContainer>
		</>
	);
};

export default Join;
