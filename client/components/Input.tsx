import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextComponent } from "../lib/next";

import { init } from "filestack-js";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

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
	const [uploadedImage, setUploadedImage] = useState("");
	const client = init(process.env.API_KEY);

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
			<div className={styles.fileContainer}>
				<label htmlFor="fileUploader" className={styles.uploaderLabel}>
					<FontAwesomeIcon
						icon={faPlus}
						className={styles.uploaderIcon}
					/>
				</label>
				<input
					className={styles.fileUploader}
					type="file"
					id="fileUploader"
                    onChange={(event) => {
						const files = (event.target! as any).files[0];

						client
							.upload(files, {}, {}, {})
							.then((res) => {
								if (res._file.type.startsWith("image")) {
									setUploadedImage(res.url);
								}
							})
							.catch(() =>
								setUploadedImage(
									"https://sockt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FARGW6gw7BJSK4zBLysS1vN2E1eRvKM3n.57768c4f.png&w=384&q=75"
								)
                        );
                        
                        uploadedImage !== "" && setMessage(uploadedImage);
                        sendMessage(event);
					}}
				/>
			</div>
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
