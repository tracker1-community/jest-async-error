module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          node: '10.5',
        },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      },
    ],
    '@tracker1/babel-preset-running-with-scissors',
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        allowTopLevelThis: true,
      },
    ],
    ['babel-plugin-dynamic-import-node', { noInterop: true }],
  ],
  env: {
    test: {
      plugins: [],
    },
  },
};
