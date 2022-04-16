import { buildSync, BuildOptions } from "esbuild";

/**
 * Treat all dependencies in package.json as externals to keep bundle size to a minimum
 */
const resolve_externals = () => {
   const { peerDependencies } = require("./package.json");
   return Object.keys(peerDependencies);
}

const common: BuildOptions = {
   bundle: true,
   entryPoints: ["src/index.ts"],
   logLevel: "info",
   minify: true,
   sourcemap: true,
   external: resolve_externals()
};

buildSync({
   ...common,
   format: "esm",
   outfile: "./dist/index.esm.js",
   target: ["esnext", "node12.22.0"]
});

buildSync({
   ...common,
   format: "cjs",
   outfile: "./dist/index.cjs.js",
   target: ["esnext", "node12.22.0"]
});