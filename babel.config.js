module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel', '@babel/proposal-class-properties'],
    },
  },
};
