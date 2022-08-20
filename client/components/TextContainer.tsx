import { Image } from "./Next";
import { NextComponent } from "../lib/next";

import onlineIcon from "../public/icons/onlineIcon.png";
import styles from "../styles/textcontainer.module.css";

export type TextContainerProps = {
	users: any;
};

export const TextContainer: NextComponent<TextContainerProps> = ({
	users
}: TextContainerProps): JSX.Element => {
	return (
		<div className={styles.textContainer}>
			<div className={styles.header}></div>
			{users ? (
				<div>
					<h1>Members ━ {users.length}</h1>
					<div className={styles.activeContainer}>
						<h2>
							{users.map(
								({ name }: { name: string }): JSX.Element => (
									<div
										key={name}
										className={styles.activeItem}>
										<Image
											alt="Online Icon"
											src={onlineIcon}
										/>
										{name}
									</div>
								)
							)}
						</h2>
					</div>
				</div>
			) : null}
		</div>
	);
};
