declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string;
		}
	}
}

export const env: NodeJS.ProcessEnv = global.process.env || {
	NODE_ENV: process.env.NODE_ENV,
	TZ: process.env.TZ,
	PORT: process.env.PORT
};

if (process.env.NODE_ENV !== "production") global.process.env = env;
