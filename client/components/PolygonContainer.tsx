import { NextComponent, PropsWithChildren } from "../lib/next";

import styles from "../styles/polygon.module.css";

export const PolgyonContainer: NextComponent<PropsWithChildren> = ({
	children,
	className,
	id,
	style
}): JSX.Element => {
    return <div className={styles.polygonContainer + " " + className} id={id} style={style}>
        {children}
    </div>;
};
