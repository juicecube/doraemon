import typescript from 'rollup-plugin-typescript2';

export default {
  entry: ['src/index.ts'],
  overridesByEntry: {
    'src/index.ts': {
      file: `./dist/es/index`,
    },
  },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraRollupPlugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: 'tsconfig.json',
    }),
  ],
};
