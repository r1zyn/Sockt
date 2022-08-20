import { Emojione } from "react-emoji-render";
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

	return isSentByCurrentUser ? (
		<div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
			<p className={`${styles.sentText} ${styles["pr-10"]}`}>
				{trimmedName}
			</p>
			<div className={`${styles.messageBox} ${styles.backgroundGrey}`}>
				<p className={`${styles.messageText} ${styles.colorWhite}`}>
					<Emojione text={text} />
				</p>
			</div>
		</div>
	) : (
		<div className={`${styles.messageContainer} ${styles.justifyStart}`}>
			<div className={`${styles.messageBox} ${styles.backgroundBlue}`}>
				<p className={`${styles.messageText} ${styles.colorWhite}`}>
					<Emojione text={text} />
				</p>
			</div>
			<p className={`${styles.sentText} ${styles["pl-10"]}`}>
				{user}
			</p>
		</div>
	);
};
