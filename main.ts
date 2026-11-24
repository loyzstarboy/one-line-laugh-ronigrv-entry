// Entry for make.fun's "The One-Line Laugh" bounty.
// The program writes one funny line — a single sentence of at most
// 200 characters — to /output/entry.txt.
//
// The line: parenting reframed as a reward economy. The punchline is
// the reversal — the star system meant to reward honesty gets turned
// back on the parent, who now pays one star per lie.
// One sentence, 90 characters, no explanation of the joke.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I gave my son a star every time he told the truth, and now he charges me one star per lie.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
