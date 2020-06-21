// rollup.config.js
// import { rollup } from 'rollup';
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "rollup-plugin-json";
import sourceMaps from 'rollup-plugin-sourcemaps'

import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      name: pkg.main,
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  watch: {
    include: "src/**",
  },
  plugins: [
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
    sourceMaps(),
  ],
};
