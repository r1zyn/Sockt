/**
 *  @type {import("next").NextConfig}
 */
const nextConfig = {
	env: {
		SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT
	},
	reactStrictMode: true
};

module.exports = nextConfig;
