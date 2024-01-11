#!/usr/bin/env -S deno run -A
// ./build_npm.ts 1.1.1

import { build, emptyDir } from "https://deno.land/x/dnt@0.39.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./pretty164.ts"],
  outDir: "./npm",
  shims: {
    deno: "dev",
  },
  typeCheck: "both",
  package: {
    // package.json properties
    name: "pretty164",
    version: Deno.args[0],
    description: "Simple E.164 dash-inserter",
    license: "MIT",
    keywords: ["E.164"],
    repository: {
      type: "git",
      url: "git+https://github.com/rentzsch/pretty164.git",
    },
    bugs: {
      url: "https://github.com/rentzsch/pretty164/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});

const packageJson = JSON.parse(Deno.readTextFileSync("./npm/package.json"));
delete packageJson.devDependencies;
delete packageJson.scripts;
Deno.writeTextFileSync(
  "./npm/package.json",
  JSON.stringify(packageJson, null, 2),
);
