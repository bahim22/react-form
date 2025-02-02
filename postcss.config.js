module.exports = {
    plugins: [
        // 'postcss-nesting',
        // 'postcss-flexbugs-fixes',
        'tailwindcss',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                    'custom-properties': false,
                },
            },
        ],
        // 'postcssNormalize',
        'cssnano',
    ],
};
