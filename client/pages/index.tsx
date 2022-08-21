import { Image, Link } from "../components/Next";
import { MainContainer } from "../components/MainContainer";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";
import { Polygon } from "../components/Polygon";
import { PolgyonContainer } from "../components/PolygonContainer";

import logo from "../public/assets/ARGW6gw7BJSK4zBLysS1vN2E1eRvKM3n.png";
import styles from "../styles/index.module.css";

const Home: NextPage = (): JSX.Element => {
	return (
		<>
			<Meta
				title="Sockt - Realtime Chat Application"
				description="Welcome to Sockt, a realtime chat application developed in Node.js with Next.js, Socket.io and express. Create a room to get started and chat with friends!"
			/>

			<PolgyonContainer>
				<Polygon
					style={{
                        height: "100%"
					}}
				/>
			</PolgyonContainer>

			<MainContainer>
				<div className={styles.header}>
                    <div className={styles.headerFeatured}>
						<Image
							src={logo}
							alt="Sockt logo"
							height={150}
							width={150}
						/>
						<span className={styles.titleContainer}>
							<h1 className={styles.title}>Sockt</h1>
						</span>
					</div>

					<Link href="/join" passHref>
						<a className={styles.joinButtonContainer}>
							<button className={styles.joinButton}>Join Chat</button>
						</a>
					</Link>
				</div>
			</MainContainer>
		</>
	);
};

export default Home;
