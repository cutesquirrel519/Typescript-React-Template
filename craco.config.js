module.exports = {
  babel: {
    presets: [],
    plugins: [
      'babel-plugin-twin',
      'babel-plugin-macros',
      [
        '@emotion/babel-plugin-jsx-pragmatic',
        {
          export: 'jsx',
          import: '__cssprop',
          module: '@emotion/react',
        },
      ],
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: '__cssprop',
          pragmaFrag: 'React.Fragment',
        },
      ],
    ],
  },
};
