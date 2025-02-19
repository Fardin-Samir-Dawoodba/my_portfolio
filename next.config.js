/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export', // Ensures a fully static export
    images: {
        unoptimized: true, // ✅ Disable Image Optimization for Static Export
        domains: ['open.cruip.com', 'ucarecdn.com', 'www.svgrepo.com', 'images.unsplash.com', 'res.cloudinary.com'],
    },
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        // ✅ Enable WebAssembly support
        config.experiments = { asyncWebAssembly: true, topLevelAwait: true };

        // ✅ Disable minification for debugging (Optional)
        if (!isServer) {
            config.optimization.minimize = false;
        }

        return config;
    },
};

module.exports = nextConfig;
