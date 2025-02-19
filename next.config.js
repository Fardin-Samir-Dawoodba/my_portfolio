/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // ✅ Disable Image Optimization for Static Export
        domains: ['open.cruip.com', 'ucarecdn.com', 'www.svgrepo.com', 'images.unsplash.com', 'res.cloudinary.com'],
    },
    output: 'export',
    distDir: 'build', // or whatever directory you're using
    webpack(config, { isServer }) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        // ✅ Enable WebAssembly support
        config.experiments = { asyncWebAssembly: true, topLevelAwait: true };
        // ✅ Disable minification for debugging (Optional)
        return config;
    },
};

module.exports = nextConfig;
