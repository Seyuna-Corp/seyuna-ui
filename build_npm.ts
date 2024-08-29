// ex. scripts/build_npm.ts
import { build, emptyDir } from "@deno/dnt";
import pkg from "deno.json" with { type: "json" };

await emptyDir("./npm");

await build({
    compilerOptions: {
        lib: ["ESNext", "DOM"],
    },
    importMap: "deno.json",
    scriptModule: false,
    entryPoints: ["./src/mod.ts"],
    outDir: "./npm",
    shims: {
        // see JS docs for overview and more options
        deno: true,
    },
    package: {
        // package.json properties
        name: "@seyuna/ui",
        version: pkg.version,
        description: "Seyuna UI framework",
        license: "MIT",
        repository: {
            type: "git",
            url: "git+https://github.com/Seyuna-Inc/seyuna-ui.git",
        },
        bugs: {
            url: "https://github.com/Seyuna-Inc/seyuna-ui/issues",
        },
    },
    postBuild() {
        // steps to run after building and before running the tests
        Deno.copyFileSync("LICENSE", "npm/LICENSE");
        Deno.copyFileSync("README.md", "npm/README.md");
    },
});
