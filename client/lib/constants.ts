import { MetaDataOptions } from "./types";

export const metadata: MetaDataOptions = {
	url: process.env.NODE_ENV === "production" ? "" : "http:/localhost:3000/",
	"theme-color": "#2f3136",
	image: "/assets/ARGW6gw7BJSK4zBLysS1vN2E1eRvKM3n.png",
	icon: "/assets/ARGW6gw7BJSK4zBLysS1vN2E1eRvKM3n.png"
};

export const errorMessages = {
	"internal server error": "Internal Server Error",
	"username taken": "Username Already Taken",
	"missing params": "Missing Name And Room Values"
};
