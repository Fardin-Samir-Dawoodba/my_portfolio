/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['open.cruip.com', 'ucarecdn.com', 'www.svgrepo.com', 'images.unsplash.com', 'res.cloudinary.com'],
    },
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        // ✅ Enable WebAssembly support
        config.experiments = { asyncWebAssembly: true, topLevelAwait: true };

        // ✅ Disable minification for debugging (Optional, only if needed)
        if (!isServer) {
            config.optimization.minimize = false;
        }

        return config;
    },
};

module.exports = nextConfig;
