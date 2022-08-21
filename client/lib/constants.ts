import { MetaDataOptions } from "./types";

export const metadata: MetaDataOptions = {
	url: process.env.NODE_ENV === "production" ? "https://sockt.vercel.app" : "http:/localhost:3000/",
	"theme-color": "#2f3136",
	image: "/assets/065c2e59-ac45-4056-b562-1c279d15f101.png",
	icon: "/assets/ARGW6gw7BJSK4zBLysS1vN2E1eRvKM3n.png"
};

export const errorMessages = {
	"internal server error": "Internal Server Error",
	"username taken": "Username Already Taken",
	"missing params": "Missing Name And Room Values"
};
