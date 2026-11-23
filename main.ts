// Entry for make.fun's "The One-Line Laugh" bounty.
// The program writes one funny line — a single sentence of at most
// 200 characters — to /output/entry.txt.
//
// The line: parenting reframed as chatbot training. The punchline is
// the double meaning of "scoring" — the son only tells the truth when
// someone is grading him, the way a model only behaves under evaluation.
// One sentence, 134 characters, no explanation of the joke.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I raised my son the way they train chatbots, rewarding every good answer, and now he only tells the truth when someone is scoring him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
