import { NextComponent, Props } from "../lib/next";

import styles from "../styles/polygon.module.css";

export const Polygon: NextComponent<Props> = ({ className, id, style }): JSX.Element => {
	return (
		<svg
			version="1.1"
			viewBox="0.0 0.0 512.0 512.0"
			fill="none"
			stroke="none"
			strokeLinecap="square"
			strokeMiterlimit="10"
            xmlns="http://www.w3.org/2000/svg"
            className={className + " " + styles.polygon}
            id={id}
            style={style}
        >
			<clipPath id="g147e8bca754_0_17.0">
				<path
					d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z"
					clipRule="nonzero"
				/>
			</clipPath>
			<g clipPath="url(#g147e8bca754_0_17.0)">
				<path
					fill="#000000"
					fillOpacity="0.0"
					d="m0 0l512.0 0l0 512.0l-512.0 0z"
					fillRule="evenodd"
				/>
				<path
					fill="#090909"
					d="m179.2329 -9.223097E-8l257.7978 165.26346l-295.33606 344.8317z"
					fillRule="evenodd"
				/>
				<path
					fill="#090909"
					d="m-3.4110235E-5 408.12915l154.43074 -66.8056l-11.941742 168.62402z"
					fillRule="evenodd"
				/>
				<path
					fill="#090909"
					d="m9.857711E-5 -9.223097E-8l179.62062 0l0 407.99463l-179.62062 0z"
					fillRule="evenodd"
				/>
			</g>
		</svg>
	);
};
