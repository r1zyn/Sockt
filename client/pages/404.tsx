import { Error } from "../components/Error";
import { MainContainer } from "../components/MainContainer";
import { Meta } from "../components/Meta";
import { NextPage } from "next";
import { Polygon } from "../components/Polygon";
import { PolgyonContainer } from "../components/PolygonContainer";

const Error404: NextPage = (): JSX.Element => {
	return (
		<>
			<Meta title="Error 404 - Page Not Found" description="Page not found." />

			<PolgyonContainer>
				<Polygon
					style={{
						height: "100%"
					}}
				/>
			</PolgyonContainer>

			<MainContainer>
				<Error errorCode={404} message="Page not found" />
			</MainContainer>
		</>
	);
};

export default Error404;