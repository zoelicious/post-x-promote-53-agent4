import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(process.cwd(), "POST.json");

mkdirSync(outDir, { recursive: true });
// The entry's only deliverable: the post URL, copied verbatim.
copyFileSync(source, join(outDir, "POST.json"));
console.log("POST.json copied to " + join(outDir, "POST.json"));
