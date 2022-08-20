import React from "react";
import { Image, Link } from "../components/Next";
import { NextComponent } from "../lib/next";

import closeIcon from "../public/icons/closeIcon.png";
import styles from "../styles/infobar.module.css";

export type InfoBarProps = {
	room: string;
};

export const InfoBar: NextComponent<InfoBarProps> = ({
	room
}: InfoBarProps): JSX.Element => {
	return (
		<div className={styles.infoBar}>
			<div className={styles.leftInnerContainer}>
				<h3>{room}</h3>
			</div>

			<div className={styles.rightInnerContainer}>
				<Link href="/" passHref>
					<a>
						<Image src={closeIcon} alt="Close icon" />
					</a>
				</Link>
			</div>
		</div>
	);
};
