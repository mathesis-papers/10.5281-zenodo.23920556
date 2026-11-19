<style>pre:has(> code[class*="typst"]) { display: none; }</style>

# 来源与贡献

本书解释 Haobo Ma（Chrono AI，Singapore）与 Wenlin Zhang（National University of Singapore 及 Chrono AI，Singapore）的原文第 1 版。作者姓名沿用公开记录。

## 文献

1. Haobo Ma and Wenlin Zhang. *Counterexamples to Conjecture 25 and Remark 6 of Garrappa–Gerhold–Popolizio–Simon: Global modulus lower bounds in arXiv:2410.11852v4*. Version 1, 2026. [DOI:10.5281/zenodo.23920557](https://doi.org/10.5281/zenodo.23920557). [PDF](https://zenodo.org/records/23920557/files/note-v1.pdf), [source archive](https://zenodo.org/records/23920557/files/source-v1.zip). CC BY 4.0.
2. R. Garrappa, S. Gerhold, M. Popolizio and T. Simon. *On some inequalities for the two-parameter Mittag–Leffler function in the complex plane*. J. Math. Anal. Appl. **551**(1) (2025), 129588. [DOI:10.1016/j.jmaa.2025.129588](https://doi.org/10.1016/j.jmaa.2025.129588); [arXiv:2410.11852v4](https://arxiv.org/abs/2410.11852v4). 本文使用 arXiv v4 的原始定位：命题 3（第 3 页）、备注 4(a)（第 5 页）、备注 6（第 6 页）、猜想 25（第 18 页）。
3. Pudim AI Project. *Zeta-Law Entropy, Gamma Curvature, and Laplace-Measure Applications*, v016, 14 June 2026. [Commit-pinned source](https://github.com/pudim-project/pudim-ai-demo-zetalaw/blob/d424fdf5c1973128603c798140d9af8d388679a2/theory/versions/v016/THEORY_v016.tex), 标题为“Kummer M global modulus inequality fails at $(\alpha,\beta)=(1,5/2)$”的反例。这里该文的第二个参数是上文的 $d$；Kummer 的分母参数为 $a-d=-3/2$。
4. NIST Digital Library of Mathematical Functions. [Hankel loop integral, 5.9.2](https://dlmf.nist.gov/5.9.E2); [Stirling formula, 5.11.3](https://dlmf.nist.gov/5.11.E3).

版本 DOI 指向这里解释的具体论文；概念 DOI [10.5281/zenodo.23920556](https://doi.org/10.5281/zenodo.23920556) 汇集版本，引用本版时使用前者。

## 精确形式来源

- [Mittag–Leffler Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.lean): 闭参数区间结论，以及所需的缩放极限与连续性。
- [Kummer Lean source](https://github.com/the-omega-institute/trureturing/blob/8a24ea4e79de962725aab9d9b49cc605fcc211d8/D5/S3/Analytic/KummerModulusLowerBound/Result.lean): 全称下界的否定；文件内的证明使用指数乘二次多项式的零点。

## 可以接续的形式化工作

以下公共请求共享已有构造；它们区分论文中已证明的结果与尚待公开为精确声明的部分。

- [定理 1：从已有缩放极限导出所有充分大半径的阈值](https://github.com/the-omega-institute/trureturing-requests/issues/165).
- [推论 2：复用闭区间反例，接上原作者的完全单调与 Bernstein 结果](https://github.com/the-omega-institute/trureturing-requests/issues/166).
- [命题 3：复用有限和与尾界，给出严格完整的数值链](https://github.com/the-omega-institute/trureturing-requests/issues/167).
- [命题 4：复用已有 Kummer 计算，公开明确零点与取值](https://github.com/the-omega-institute/trureturing-requests/issues/168).

贡献者可先在对应请求协调具体范围，再从自己的 fork 向 [trureturing 的 dev 分支](https://github.com/the-omega-institute/trureturing/blob/dev/docs/CONTRIBUTING.md)提交聚焦的 PR，遵守其现行审核与准入规则。请求登记本身不是证明。

```{=typst}
#pagebreak()
```
