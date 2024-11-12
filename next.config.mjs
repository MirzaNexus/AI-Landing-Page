// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     // Find the rule that already handles SVGs
//     const fileLoaderRule = config.module.rules.find((rule) =>
//       rule.test?.test?.(".svg")
//     );

//     // Modify the rule to ignore SVGs, so we can handle them with @svgr/webpack
//     if (fileLoaderRule) {
//       fileLoaderRule.exclude = /\.svg$/;
//     }

//     // Add a new rule to handle SVGs with @svgr/webpack
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Targets SVG files
      use: [
        {
          loader: "@svgr/webpack", // Use @svgr/webpack to transform SVG into a React component
          options: {
            svgo: false, // Disable SVGO optimization (optional)
          },
        },
      ],
    });
    return config; // Return the modified config
  },
};

export default nextConfig;
