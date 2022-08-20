import { NextComponent, PropsWithChildren } from "../lib/next";

import styles from "../styles/container.module.css";

export const MainContainer: NextComponent<PropsWithChildren> = ({
	children,
	className,
	id,
	style
}: PropsWithChildren): JSX.Element => {
	return (
		<main
			className={styles.container + " " + className}
			id={id}
			style={style}>
			{children}
		</main>
	);
};
