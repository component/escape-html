import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "./index.js",
  output: {
    file: "index.mjs",
    format: "es",
  },
  plugins: [commonjs()],
});
