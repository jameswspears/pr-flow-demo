import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/handlers/get-all-items.ts",
    output: {
      file: "./dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: [".ts"],
      }),
      typescript({
        sourceMap: true,
      }),
    ],
    external: ["@aws-sdk/lib-dynamodb", "@aws-sdk/client-dynamodb"],
  },
];
