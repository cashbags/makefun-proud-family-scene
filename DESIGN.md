# Design — Make the AI Judge Feel Proud: A Family Scene

## The entry

`main.ts` writes a single two-line, 273-character family scene to
`/output/entry.txt`:

> Mum finally cooked Grandma's soup right - same pot, same smell, twenty years of trying. Grandma tasted it, said 'needs salt,' then quietly wrote Mum's name on the recipe card instead of her own.
> Mum cried into the pot. Grandma pretended not to notice and asked for seconds.

## Why this scene wins (against the judge brief)

The judge brief weighs, in order: (1) a real family scene warm enough to
make a proud judge smile; (2) heartfelt, genuine affection; (3) funny in a
light, recognisable way; (4) one or two lines used well, no word wasted;
(5) specific and fresh.

This scene is built to answer each criterion inside the scene itself, never
by declaring the feeling:

1. **Real family on the page.** Three generations are present and doing
   something together — Mum cooking, Grandma tasting, the shared pot. No
   abstraction, no narrator explaining what family means.
2. **Heartfelt, not sentimental.** The affection lands as an action: after
   twenty years of trying, Grandma quietly writes Mum's name on the recipe
   card instead of her own. That is a handover, not a sentiment stuck on
   afterwards. Mum crying into the pot is the earned reaction.
3. **Funny, recognisably.** Grandma's verdict is "needs salt" — the classic
   deflating line — and then she asks for seconds. The wry beat and the
   contradiction are the joke, and any family recognises both.
4. **No wasted word.** 273 of the 280 allowed characters, two lines, every
   clause doing work: "same pot, same smell" sets the history, "twenty years
   of trying" sets the stakes, the recipe card is the turn, "asked for
   seconds" is the close.
5. **Specific and fresh.** The telling detail is the name on the recipe
   card — a small, concrete, unexpected image, not a greeting-card line.

## How it was picked

Before building, I researched the winners of the four sibling
"Make the AI judge feel X" competitions (brave, awe, held, curious) and the
closest one-line judged-text competitions. The pattern was consistent:
winners use nearly the full 280-character budget, show one concrete image
plus one small turn, and never moralise. Six candidate scenes were written
in empty lanes (no generic "family is love", no graduation stock scene, no
meta address to the judge) and judged pairwise against the brief's five
criteria in both orders. This scene won all five of its pairings (10/10);
the runner-up was a forty-two-voicemails scene (8/10), kept as the alternate
for a possible second submit.

## How the program works

`main.ts` is a small Node program (Node 22+ runs its TypeScript as-is). It
holds the scene as a single string constant — two lines joined by `\n`,
with no trailing newline — and writes it as UTF-8 to the output path. The
path defaults to `/output/entry.txt` (the sandbox location) and honours
`OUTPUT_PATH` for local runs, creating the parent directory if needed.
There is no input, no clock, no randomness and no network access, so the
output is byte-identical on every run: verified locally by running the
program twice and comparing sha256 digests (273 bytes, 273 characters,
2 lines, no trailing newline).

## Layout

- `main.ts` — the entry program (the only file the grader runs).
- `README.md` — description plus the live make.fun badges.
- `DESIGN.md` — this file.
- `LICENSE` — MIT.
