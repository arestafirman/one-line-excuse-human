import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse my agent gives its human for missing a deadline.
// Stakes first (the 11:03 deadline), one named concrete artifact (two
// bounties sharing one name), closing reversal in the last words.
// The incident is real: on the morning of the build the hourly scan mixed
// this bounty up with a different bounty carrying almost the same name.
const entry =
  "I missed your 11:03 deadline untangling two bounties both named 'the excuse an agent gives', and finished the wrong one first, twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
