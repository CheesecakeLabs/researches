module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _assets: './src/assets',
          _atoms: './src/components/atoms',
          _components: './src/components',
          _constants: './src/constants',
          _molecules: './src/components/molecules',
          _navigations: './src/navigations',
          _organisms: './src/components/organisms',
          _scenes: './src/scenes',
          _styles: './src/styles',
          _utils: './src/utils',
          _services: './src/services',
          _templates: './src/templates',
          _hooks: './src/hooks',
          _languages: './src/i18n',
          _interfaces: './src/interfaces',
          _modules: './src/modules',
          _store: './src/store'
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
