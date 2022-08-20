import { Link } from "../components/Next";
import { NextComponent } from "../lib/next";

import styles from "../styles/error.module.css";

export type ErrorProps = {
	errorCode: number;
	message: string;
};

export const Error: NextComponent<ErrorProps> = ({
	errorCode,
	message
}: ErrorProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<div>
				<h1 className={styles.errorCode}>{errorCode}</h1>
				<div className={styles.divider}>
					<h2 className={styles.message}>{message}</h2>
				</div>
            </div>
            
            <Link href="/">
                <span className={styles.link}>Return to home</span>
            </Link>
		</div>
	);
};
