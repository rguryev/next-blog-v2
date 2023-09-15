/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['static.coinstats.app'],
	},
};

module.exports = nextConfig;
