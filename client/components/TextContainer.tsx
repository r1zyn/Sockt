import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Link } from "./Next";
import { NextComponent } from "../lib/next";

import { faX } from "@fortawesome/free-solid-svg-icons";

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
			<div className={styles.header}>
				<Link href="/">
					<FontAwesomeIcon icon={faX} className={styles.closeIcon} />
				</Link>
			</div>
			{users ? (
				<div>
					<h1 className={styles.membersTitle}>
						Members ━ {users.length}
					</h1>
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
