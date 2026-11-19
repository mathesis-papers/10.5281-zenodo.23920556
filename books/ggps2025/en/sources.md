# Sources and contributions

This reading explains version 1 of the paper by Haobo Ma (Chrono AI, Singapore) and Wenlin Zhang (National University of Singapore and Chrono AI, Singapore). Author names follow the public record.

## References

1. Haobo Ma and Wenlin Zhang. *Counterexamples to Conjecture 25 and Remark 6 of Garrappa–Gerhold–Popolizio–Simon: Global modulus lower bounds in arXiv:2410.11852v4*. Version 1, 2026. [DOI:10.5281/zenodo.23920557](https://doi.org/10.5281/zenodo.23920557). [PDF](https://zenodo.org/records/23920557/files/note-v1.pdf), [source archive](https://zenodo.org/records/23920557/files/source-v1.zip). CC BY 4.0.
2. R. Garrappa, S. Gerhold, M. Popolizio and T. Simon. *On some inequalities for the two-parameter Mittag–Leffler function in the complex plane*. J. Math. Anal. Appl. **551**(1) (2025), 129588. [DOI:10.1016/j.jmaa.2025.129588](https://doi.org/10.1016/j.jmaa.2025.129588); [arXiv:2410.11852v4](https://arxiv.org/abs/2410.11852v4). Locators used here refer to arXiv v4: Proposition 3 (p. 3), Remark 4(a) (p. 5), Remark 6 (p. 6), and Conjecture 25 (p. 18).
3. Pudim AI Project. *Zeta-Law Entropy, Gamma Curvature, and Laplace-Measure Applications*, v016, 14 June 2026. [Commit-pinned source](https://github.com/pudim-project/pudim-ai-demo-zetalaw/blob/d424fdf5c1973128603c798140d9af8d388679a2/theory/versions/v016/THEORY_v016.tex), counterexample headed “Kummer M global modulus inequality fails at $(\alpha,\beta)=(1,5/2)$”. Its second parameter is $d$ in our notation; the denominator parameter is $a-d=-3/2$.
4. NIST Digital Library of Mathematical Functions. [Hankel loop integral, 5.9.2](https://dlmf.nist.gov/5.9.E2); [Stirling formula, 5.11.3](https://dlmf.nist.gov/5.11.E3).

The version DOI identifies the paper explained here. The concept DOI [10.5281/zenodo.23920556](https://doi.org/10.5281/zenodo.23920556) groups versions; cite the version DOI for this edition.

## Exact formal sources

- [Mittag–Leffler Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean): the closed parameter interval, with the scaled limits and continuity used to obtain it.
- [Kummer Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Analytic/KummerModulusLowerBound/Result.lean): negation of the universal bound; its proof uses the zero of an exponential times a quadratic.

## Focused formalization contributions

The following shared requests reuse existing constructions. They distinguish manuscript-proved mathematics from the remaining exact public statement work.

- [Theorem 1: expose the eventual-radius conclusion from the existing scaled limits](https://github.com/the-omega-institute/trureturing-requests/issues/165).
- [Corollary 2: combine the existing closed-interval failure with the original CM and Bernstein results](https://github.com/the-omega-institute/trureturing-requests/issues/166).
- [Proposition 3: reuse the finite sum and tail to export the full strict numerical chain](https://github.com/the-omega-institute/trureturing-requests/issues/167).
- [Proposition 4: expose the explicit zero and values from the existing Kummer calculation](https://github.com/the-omega-institute/trureturing-requests/issues/168).

Coordinate a precise scope on the relevant request, then submit a focused contributor-fork PR directly to [trureturing dev](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md) under its current review and admission rules. Request registration is not proof evidence.

<section hidden="hidden">

```{=typst}
#pagebreak()
```

</section>
