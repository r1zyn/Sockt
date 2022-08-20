import { NextComponent } from "../lib/next";

import styles from "../styles/input.module.css";

export type InputProps = {
	message: any;
	setMessage: any;
	sendMessage: any;
};

export const Input: NextComponent<InputProps> = ({
	message,
	setMessage,
	sendMessage
}: InputProps): JSX.Element => {
	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type="text"
				placeholder="Enter your message..."
				value={message}
				onChange={(event) =>
					setMessage(event.target.value)
				}
				onKeyDown={(event) =>
					event.key === "Enter" ? sendMessage(event) : null
				}
			/>
			<button
				className={styles.sendButton}
				onClick={(event) => sendMessage(event)}>
				Send
			</button>
		</form>
	);
};
