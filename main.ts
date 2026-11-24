// One Sentence for a Traveler from 1800 — make.fun entry
//
// The competition asks for one sentence of at most 200 characters that
// explains the modern internet to someone arriving from the year 1800,
// using only things a person from 1800 already knows. The judge weighs,
// in order: does it explain the internet, does it build from 1800-known
// things (a road, a post office, a library), is it true, does every word
// earn its place, and does it leave one memorable image.
//
// This program writes that sentence to /output/entry.txt. The sentence
// is one picture: a single road joining every post office, library and
// market on earth, so any letter, book or spoken word reaches anyone,
// anywhere, faster than a breath. No word in it was coined after 1800.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine one road joining every post office, library, and market on earth, so any letter, book, or spoken word reaches anyone, anywhere, faster than a breath.";

if (SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, over the 200 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
