import Emoji from "react-emoji-render";
import Linkify from "react-linkify";
import { NextComponent } from "../lib/next";

import styles from "../styles/message.module.css";

export type MessageProps = {
	message: any;
	name: string;
};

export const Message: NextComponent<MessageProps> = ({
	message: { user, text },
	name
}: MessageProps): JSX.Element => {
	let isSentByCurrentUser = false;
	const trimmedName = name.trim();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return (
		<div className={styles.messageContainer}>
			<span className={styles.messageHeader}>
				<p className={styles.userText}>
					{isSentByCurrentUser ? trimmedName : user}
				</p>
				<p className={styles.date}>{new Date().toLocaleDateString()}</p>
			</span>{" "}
			<Linkify
				componentDecorator={(
					decoratedHref: string,
					decoratedText: string,
					key: number
				): JSX.Element => (
					<a
						target="blank"
						href={decoratedHref}
						key={key}
						className={styles.link}>
						{decoratedText}
					</a>
				)}>
				<p className={styles.messageText}>
					<Emoji text={text} />
				</p>{" "}
			</Linkify>
		</div>
	);
};
