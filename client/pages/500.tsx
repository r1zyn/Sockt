import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Error } from "../components/Error";
import { ErrorMessage } from "../lib/types";
import { MainContainer } from "../components/MainContainer";
import { Meta } from "../components/Meta";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedQuery, parse } from "query-string";
import { Polygon } from "../components/Polygon";
import { PolgyonContainer } from "../components/PolygonContainer";

import { errorMessages } from "../lib/constants";

const Error505: NextPage = (): JSX.Element => {
	const [message, setMessage]: [string, Dispatch<SetStateAction<string>>] =
		useState<string>(errorMessages["internal server error"]);
	const router: NextRouter = useRouter();

	useEffect((): void => {
		const { message }: ParsedQuery<string> = parse(
			router.asPath.replace("/500", "")
		);

		if (
			message &&
			typeof errorMessages[
				decodeURIComponent(message as string) as ErrorMessage
			] !== "undefined"
		) {
			setMessage(
				errorMessages[
					decodeURIComponent(message as string) as ErrorMessage
				]
			);
		} else {
			setMessage(errorMessages["internal server error"]);
		}
	}, [router.asPath.replace("/500", "")]);

	return (
		<>
			<Meta title={"Error 500 - " + message} description={message} />

			<PolgyonContainer>
				<Polygon
					style={{
						height: "100%"
					}}
				/>
			</PolgyonContainer>

			<MainContainer>
				<Error errorCode={500} message={message} />
			</MainContainer>
		</>
	);
};

export default Error505;
