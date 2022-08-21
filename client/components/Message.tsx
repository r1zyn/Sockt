import Emoji from "react-emoji-render";
import Image from "react-image-enlarger";
import Linkify from "react-linkify";
import { NextComponent } from "../lib/next";

import { useEffect, useState } from "react";
import { validateImage } from "image-validator";

import styles from "../styles/message.module.css";

export type MessageProps = {
	message: {
		user: string;
		text: string;
	};
	name: string;
};

export const Message: NextComponent<MessageProps> = ({
	message: { user, text },
	name
}: MessageProps): JSX.Element => {
	const [isImage, setIsImage] = useState(false);
	const [zoomed, setZoomed] = useState(false);

	let isSentByCurrentUser = false;
	const trimmedName = name.trim();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	useEffect(() => {
		validateImage(text)
			.then((result) => (result ? setIsImage(true) : setIsImage(false)))
			.catch(() => setIsImage(false));
	}, [text]);

	return (
		<div className={styles.messageContainer}>
			<span className={styles.messageHeader}>
				<p className={styles.userText}>
					{isSentByCurrentUser ? trimmedName : user}
				</p>
				<p className={styles.date}>{new Date().toLocaleDateString()}</p>
			</span>{" "}
			{isImage ? (
				<Image
					style={{ maxWidth: "50%" }}
					zoomed={zoomed}
					src={text}
					onClick={() => setZoomed(true)}
					onRequestClose={() => setZoomed(false)}
				/>
			) : (
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
			)}
		</div>
	);
};
