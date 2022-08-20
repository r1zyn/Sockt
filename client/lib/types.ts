import { errorMessages } from "./constants";

export type ErrorMessage = keyof typeof errorMessages;

export interface MetaDataOptions {
	url: string;
	"theme-color": string;
	image: string;
	icon: string;
}

export interface User {
	id: string;
	name: string;
	room: string;
}
