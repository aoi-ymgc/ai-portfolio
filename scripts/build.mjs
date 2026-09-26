import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../public/", import.meta.url);
const output = new URL("../dist/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(root, output, { recursive: true });
console.log("Static portfolio copied to dist/. ");
