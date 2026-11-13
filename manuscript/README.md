# Counterexamples to Conjecture 25 and Remark 6

This note answers Conjecture 25 and Remark 6 of Garrappa, Gerhold, Popolizio and Simon, arXiv:2410.11852v4.

## Contents

- `note.tex`: self-contained proofs, exact posing locators, coverage table, references, and links to the two pinned Lean files.
- `note.pdf`: typeset note.
- `verify.py`: standard-library Python 3 exact rational checks for the explicit Mittag–Leffler witness and supplementary Kummer identities.
- `verification.json`: expected checker output, with outward rational bounds on the finite sums.
- `metadata.json`: title, creators, license, problem identifiers, and formal-source links.
- `coverage.json`: posing locators and the distinction between written proofs, finite checks, and the pinned formal statements.

The contour expansion and parameter continuity are written proofs. The finite certificate proves the strict inequality at `(alpha,beta,z)=(3/2,1/2,-115+10i)` using 64 terms and an analytic tail bound. The Kummer identity is proved for every coefficient algebraically; 101 coefficient instances are also checked.

The Kummer section credits and explains the earlier local counterexample in the Pudim AI Project manuscript dated 14 June 2026, alongside the exact-zero example.

## Build

Use Tectonic 0.17.0:

```sh
tectonic note.tex
python3 verify.py > verification.actual.json
diff -u verification.json verification.actual.json
```

Alternatively, run `pdflatex note.tex` twice. The bibliography is included in `note.tex`; no BibTeX step or additional scientific input is required. The Python checks require no third-party packages.

## Authors and license

Haobo Ma — ChronoAI Pte Ltd, Singapore.

Wenlin Zhang — National University of Singapore; ChronoAI Pte Ltd, Singapore.

CC BY 4.0 (`cc-by-4.0`): https://creativecommons.org/licenses/by/4.0/.
