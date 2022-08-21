/**
 *  @type {import("next").NextConfig}
 */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY,
		SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT
	},
	reactStrictMode: true
};

module.exports = nextConfig;