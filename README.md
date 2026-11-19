# Counterexamples to Conjecture 25 and Remark 6 of Garrappa–Gerhold–Popolizio–Simon: Global modulus lower bounds in arXiv:2410.11852v4

**Authors:** Haobo Ma, Wenlin Zhang

Conjecture 25 and the question in Remark 6 of Garrappa, Gerhold, Popolizio and Simon, arXiv:2410.11852v4, both have negative answers. For every 1<alpha<2, the proposed Mittag–Leffler modulus lower bound fails at beta=alpha-1, and at one fixed nonreal point it continues to fail on a closed interval [alpha-1,alpha-1+epsilon] with epsilon>0. A Hankel-contour expansion gives this family, while an exact rational certificate supplies the explicit instance (alpha,beta,z)=(3/2,1/2,-115+10i). The Kummer question has the elementary witness M(1/2,-3/2,z)=exp(z)(1-4z/3+4z^2/3).

- PDF: [frozen public file](paper.pdf)
- DOI: [https://doi.org/10.5281/zenodo.23920557](https://doi.org/10.5281/zenodo.23920557)
- Concept DOI: [https://doi.org/10.5281/zenodo.23920556](https://doi.org/10.5281/zenodo.23920556)
- License: CC-BY-4.0
- Version: 1
- Mathesis record: [ggps2025](https://mathesis-omega-research.apps.chrono-ai.fun/papers/ggps2025?version=1)

## How to cite

Haobo Ma, Wenlin Zhang (2026). Counterexamples to Conjecture 25 and Remark 6 of Garrappa–Gerhold–Popolizio–Simon: Global modulus lower bounds in arXiv:2410.11852v4. Mathesis, version 1. https://doi.org/10.5281/zenodo.23920557

## Statement progress

| Statement | Formalization status | Source | Verification basis |
|---|---|---|---|
| Theorem (s1) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/31e6846798fc7b0349538fb9792b6d53d3f60566/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean) | No public receipt |
| Corollary (s2) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/31e6846798fc7b0349538fb9792b6d53d3f60566/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean) | No public receipt |
| Proposition (s3) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/31e6846798fc7b0349538fb9792b6d53d3f60566/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean) | No public receipt |
| Proposition (s4) | needs_attention | [Lean source](https://github.com/the-omega-institute/trureturing/blob/31e6846798fc7b0349538fb9792b6d53d3f60566/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean) | No public receipt |

## Contributions

Original authors are listed above. Formalization contributors and attribution are retained in `formalization/nodes.json`; repository pull requests do not confer verification or credit. Submit formalization attempts through the Mathesis attempt path described in [CONTRIBUTING.md](CONTRIBUTING.md).

<!-- Mathesis generated repository guide; refresh with paper.py front. -->

## Reading and materials

[Paper site](https://papers.trureturing.org/10.5281-zenodo.23920556/) · [Frozen PDF](paper.pdf) · [Citation](CITATION.cff)

[中文阅读](https://papers.trureturing.org/10.5281-zenodo.23920556/ggps2025/zh/) · [Read in English](https://papers.trureturing.org/10.5281-zenodo.23920556/ggps2025/en/)

[Slides](https://papers.trureturing.org/10.5281-zenodo.23920556/ggps2025/slides/) ([sources](books/ggps2025/slides/)) · [Videos](https://papers.trureturing.org/10.5281-zenodo.23920556/ggps2025/films/) ([sources](books/ggps2025/films/))

These are publication routes; available built materials are inventoried in [mathesis-materials.json](https://papers.trureturing.org/10.5281-zenodo.23920556/mathesis-materials.json).

## Book and formalization

Catalog formalization status above is separate from the statement comparisons below. A nearby declaration does not verify the complete written result.

| Book result | Comparison with formal base | Compared declaration |
|---|---|---|
| `ray-family` | variant | `D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.source_endpoint_scaled_limit` |
| `closed-family` | same | `D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.source_closed_beta_family` |
| `cm-separation` | variant | `D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.source_closed_beta_family` |
| `rational-witness` | variant | `D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.result` |
| `kummer-negation` | same | `D5/S3/Analytic/KummerModulusLowerBound/Result.result` |
| `kummer-witness` | variant | `D5/S3/Analytic/KummerModulusLowerBound/Result.result` |

Book stage: **complete**; 0 pending claims. [Statement comparisons](.mathesis/REVIEW.md).

## Repository map

| Zone | Location |
|---|---|
| Paper record | `paper.json`, `CITATION.cff`, `paper.pdf`, `manuscript/`, `formalization/nodes.json`, `LICENSES/`, `.mathesis/` |
| Content | `books/ggps2025/`: Chinese/English text, figures, visualizations, videos, slides, assets |
| Machinery | Upstream and layer managed paths; update with `tbook template update` |
| Repository front | This README, changelog, contribution guide, licence, project/site/pin configuration, `template.d/` |

See [the enforced layout](docs/layer-mathesis/LAYOUT.md). Preparation run records and built outputs stay outside the committed tree.
