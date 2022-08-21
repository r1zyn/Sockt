declare global {
	namespace NodeJS {
		interface ProcessEnv {
			API_KEY: string;
			SOCKET_ENDPOINT: string;
		}
	}
}

export const env: NodeJS.ProcessEnv = global.process.env || {
	API_KEY: process.env.API_KEY,
	NODE_ENV: process.env.NODE_ENV,
	TZ: process.env.TZ,
	SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT
};

if (process.env.NODE_ENV !== "production") global.process.env = env;
