import React, { useEffect } from "react";
import { Message } from "./Message";
import { NextComponent } from "../lib/next";

import onAppend from "../lib/utils/onChildAdd";
import styles from "../styles/messages.module.css";

export type MessagesProps = {
	messages: any;
	name: string;
};

export const Messages: NextComponent<MessagesProps> = ({
	messages,
	name
}: MessagesProps): JSX.Element => {
	useEffect((): void => {
		const messageContainer: HTMLDivElement = document.getElementById(
			"message-container"
		) as HTMLDivElement;
		onAppend(messageContainer, (): void =>
			messageContainer.scrollTo(0, messageContainer.scrollHeight)
		);
	});

	return (
		<div className={styles.messages} id="message-container">
			{messages.map(
				(message: any, i: number): JSX.Element => (
					<div key={i}>
						<Message message={message} name={name} />
					</div>
				)
			)}
		</div>
	);
};
