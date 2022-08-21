import { Head } from "./Next";
import type { NextComponent, Props } from "../lib/next";
import { metadata } from "../lib/constants";
import getFileType from "../lib/utils/getFileType";

export type MetaProps = Props<{
	title: string;
	description?: string;
}>;

export const Meta: NextComponent<MetaProps> = (
	props: MetaProps
): JSX.Element => {
	const iconFileType: string = getFileType(metadata["icon"]);

	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="title" content={props.title} />
			<meta
				name="description"
				content={
					props.description ||
					"No description was provided for this page."
				}
			/>
			<meta name="robots" content="all" />
			<meta name="DC.title" content={props.title} />
			<meta
				name="keywords"
				content="sockt,chat,realtime,app,Node.js,socket.io,Express,Next.js"
			/>

			<meta name="theme-color" content={metadata["theme-color"]} />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content={metadata["theme-color"]}
			/>
			<meta
				name="msapplication-navbutton-color"
				content={metadata["theme-color"]}
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content={metadata["url"]} />
			<meta property="og:title" content={props.title} />
			<meta
				property="og:description"
				content={
					props.description ||
					"No description was provided for this page."
				}
			/>
			<meta property="og:image" content={metadata["image"]} />
			<meta property="og:site_name" content="Sockt" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={metadata["url"]} />
			<meta property="twitter:title" content={props.title} />
			<meta
				property="twitter:description"
				content={
					props.description ||
					"No description was provided for this page."
				}
			/>
			<meta property="twitter:image" content={metadata["image"]} />

			<title>{props.title}</title>
			<link rel="icon" type={iconFileType} href={metadata["icon"]} />
			<link
				rel="shortcut icon"
				type={iconFileType}
				href={metadata["icon"]}
			/>
			<link
				rel="apple-touch-icon"
				type={iconFileType}
				href={metadata["icon"]}
			/>
		</Head>
	);
};
