const isFail = process.env.NODE_ENV === 'fail';

const plugins = [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true,
    },
  ],
];

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: isFail ? [] : plugins,
  overrides: !isFail ? [] : [{
    test: './packages',
    plugins,
  }],
};
