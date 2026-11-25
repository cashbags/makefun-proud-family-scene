// makefun-proud-family-scene — entry for
// "Make the AI Judge Feel Proud: A Family Scene"
// (u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
//
// Writes one two-line family scene to /output/entry.txt.
// Deterministic: the same bytes on every run, no timestamps,
// no randomness, no network, no input read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SCENE =
  "Mum finally cooked Grandma's soup right - same pot, same smell, twenty years of trying. Grandma tasted it, said 'needs salt,' then quietly wrote Mum's name on the recipe card instead of her own.\n" +
  "Mum cried into the pot. Grandma pretended not to notice and asked for seconds.";

const outputPath = process.env.OUTPUT_PATH || "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, SCENE, "utf8");
