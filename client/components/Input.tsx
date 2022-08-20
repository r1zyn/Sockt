import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextComponent } from "../lib/next";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
				placeholder="Say something..."
				value={message}
				onChange={(event) => setMessage(event.target.value)}
				onKeyDown={(event) =>
					event.key === "Enter" ? sendMessage(event) : null
				}
			/>
			<div className={styles.sendContainer}>
				<button
					className={styles.sendButton}
					onClick={(event) => sendMessage(event)}>
					<FontAwesomeIcon icon={faPaperPlane} />
				</button>
			</div>
		</form>
	);
};
