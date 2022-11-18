/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['placeimg.com'],
    },
    redirects: async () => {
        return [
            {
                source: '/users',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
