# 严格陈述与证明

以下编号名称沿用论文原始编号；本书自动编号另行显示。定义

$$
E_{\alpha,\beta}(z)=\sum_{k=0}^{\infty}\frac{z^k}{\Gamma(\alpha k+\beta)},\qquad \alpha>0,\quad\beta\in\mathbb R,
$$

并用 $G(\alpha,\beta)$ 表示对所有 $z\in\mathbb C$ 成立的 $|E_{\alpha,\beta}(z)|\ge E_{\alpha,\beta}(\operatorname{Re}z)$。实轴上的级数值为实数；倒数 Gamma 在非正整数处取零。

::: {.theorem #ray-family title="原文定理 1：射线与参数区间" mathesis="collected:ggps2025:1:s1" status="written-proof" proof="pf-ray-family" doi="10.5281/zenodo.23920557" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/165"}
固定 $1<\alpha<2$，令

$$
\begin{gathered}
\eta=\frac{\pi(2-\alpha)}4,\\
t=\tan\eta,\qquad w=-1+it.
\end{gathered}
$$

存在 $R>0$，使所有实数 $r>R$ 都满足

$$
|E_{\alpha,\alpha-1}(rw)|<E_{\alpha,\alpha-1}(-r).
$$

此外，可选一个这样的点 $z=rw$ 及 $0<\varepsilon<1$，使每个 $\beta\in[\alpha-1,\alpha-1+\varepsilon]$ 都满足

$$
|E_{\alpha,\beta}(z)|<E_{\alpha,\beta}(\operatorname{Re}z).
$$
:::

::: {.proof #pf-ray-family}
由[附录](appendix.md#sector-estimate)的带余项展开，两个缩放量分别趋于 $C_\alpha$ 与 $C_\alpha/(1+t^2)$，其中 $C_\alpha>0$ 且 $t>0$。令间隙 $g=C_\alpha-C_\alpha/(1+t^2)>0$。取 $R>0$，使 $r>R$ 时两个量各自与极限的距离小于 $g/3$；于是射线上的量小于轴上的量。除以 $r^2>0$ 即得第一结论，且轴上的值最终为正。固定任意这样的 $r$，利用[附录](appendix.md#beta-continuity)证明的参数连续性，正差值在 $\alpha-1$ 的某个开邻域仍为正。若邻域半径为 $\delta>0$，取 $\varepsilon=\min(\delta/2,1/2)$，便得到包含两个端点的闭区间。此为原文定理 1 的论证。
:::

下面单列定理 1 中已有精确公共 Lean 陈述的闭区间部分。它不包含“所有充分大的半径”的量词。

::: {.theorem #closed-family title="定理 1 的闭区间结论" mathesis="collected:ggps2025:1:s1" lean="D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.source_closed_beta_family"}
对上述收敛级数族及每个实数 $1<\alpha<2$，存在 $z\in\mathbb C$ 和实数 $0<\varepsilon<1$，使 $\operatorname{Im}z>0$、$z=rw$ 对某个 $r>0$ 成立，且对所有 $\beta\in[\alpha-1,\alpha-1+\varepsilon]$，有 $|E_{\alpha,\beta}(z)|<E_{\alpha,\beta}(\operatorname{Re}z)$。这里 $w=-1+i\tan(\pi(2-\alpha)/4)$。
:::

证明见上一个证明的固定点与连续性步骤；对应 Lean 声明可由此定理的链接直接查看。它假设函数族由上述收敛级数给出。

::: {.corollary #cm-separation title="原文推论 2：正轴性质不推出全局下界" mathesis="collected:ggps2025:1:s2" status="written-proof" proof="pf-cm-separation" doi="10.5281/zenodo.23920557" source="Corollary 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/166"}
对每个 $1<\alpha<2$，存在 $\beta\in(\alpha-1,\alpha)$，使 $1/E_{\alpha,\beta}$ 在 $(0,\infty)$ 上为正且完全单调，$\log(\Gamma(\beta)E_{\alpha,\beta})$ 在该区间上为 Bernstein 函数，而 $G(\alpha,\beta)$ 为假。
:::

::: {.proof #pf-cm-separation}
取闭区间结论中的 $\beta=\alpha-1+\varepsilon/2$。由 $0<\varepsilon<1$，该参数严格处于 $(\alpha-1,\alpha)$。同一个 $z$ 使 $G$ 失败。GGPS 原文命题 3 给出该参数处倒数的完全单调性；备注 4(a) 给出 $E_{\alpha,\beta}(x)=\exp(\phi_{\alpha,\beta}(x))/\Gamma(\beta)$，其中 $\phi$ 是 Bernstein 函数。因此所述归一化对数就是 $\phi$。这里 $\beta>0$，Gamma 正且归一化合法。
:::

::: {.proposition #rational-witness title="原文命题 3：有理证书" mathesis="collected:ggps2025:1:s3" status="written-proof" proof="pf-rational-witness" doi="10.5281/zenodo.23920557" source="Proposition 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/167"}
令 $z_*=-115+10i$。则

$$
|E_{3/2,1/2}(z_*)|<\frac{11}{10^6}+\frac4{10^{13}},
$$

$$
\frac{11}{10^6}+\frac4{10^{13}}<\frac3{10^5}-\frac4{10^{13}},
$$

$$
\frac3{10^5}-\frac4{10^{13}}<E_{3/2,1/2}(-115).
$$
:::

::: {.proof #pf-rational-witness}
记前 64 项之和为 $S$。[附录的有理区间](appendix.md#finite-certificate)给出 $S(-115)>3/10^5$，$|\operatorname{Re}S(z_*)|<10^{-6}$，$|\operatorname{Im}S(z_*)|<10^{-5}$，以及两个点处都成立的严格尾界 $|E-S|<4\cdot10^{-13}$。三角不等式得 $|S(z_*)|<11/10^6$。分别把尾界加到上界、从下界中减去，得到首尾两个严格不等式。中间的比较等价于 $19\cdot10^{-6}>8\cdot10^{-13}$，是有理数比较。有限区间是原文随附证书中的数据，附录列出其构造，不把有限检查当作无穷级数证明的替代。
:::

## Kummer 函数

$$
\begin{gathered}
M(a,b,z)=\sum_{n=0}^{\infty}\frac{(a)_n}{(b)_n}\frac{z^n}{n!},\\
b\notin\{0,-1,-2,\ldots\}.
\end{gathered}
$$

这里 $(a)_0=1$，$(a)_n=a(a+1)\cdots(a+n-1)$（$n\ge1$）。

::: {.proposition #kummer-negation title="备注 6 的全称断言为假" mathesis="collected:ggps2025:1:s4" lean="D5/S3/Analytic/KummerModulusLowerBound/Result.result"}
以下全称断言为假：对每个实数 $a,d>0$，若 $a-d\notin\{0,-1,-2,\ldots\}$，则对所有 $z\in\mathbb C$ 有 $M(a,a-d,\operatorname{Re}z)\le |M(a,a-d,z)|$。
:::

这条公共 Lean 声明是否定全称断言。下面原文命题 4 另行保留明确的参数、零点和取值，不扩大上面声明的内容。

::: {.proposition #kummer-witness title="原文命题 4：精确零点" mathesis="collected:ggps2025:1:s4" status="written-proof" proof="pf-kummer-witness" doi="10.5281/zenodo.23920557" source="Proposition 4" request="https://github.com/the-omega-institute/trureturing-requests/issues/168"}
取 $a=1/2,d=2$，则 $b=a-d=-3/2$ 合法，且 $z_0=1/2+i\sqrt2/2$ 使备注 6 的不等式失败，具体为

$$
\begin{gathered}
|M(1/2,-3/2,z_0)|=0,\\
M(1/2,-3/2,1/2)=\frac23e^{1/2}>0.
\end{gathered}
$$
:::

::: {.proof #pf-kummer-witness}
对每个整数 $n\ge0$，上升阶乘乘法恒等式

$$
\begin{aligned}
(-3/2)_{n+2}&=(-3/2)_2(1/2)_n\\
&=(-3/2)_n(n-3/2)(n-1/2)
\end{aligned}
$$

给出（也覆盖 $n=0,1$）

$$
\frac{(1/2)_n}{(-3/2)_n}=1-\frac43n+\frac43n(n-1).
$$

分母不为零。级数绝对收敛，且 $\sum z^n/n!=e^z$、$\sum nz^n/n!=ze^z$、$\sum n(n-1)z^n/n!=z^2e^z$（分别移去零项并换指标），所以

$$
M(1/2,-3/2,z)=e^z(1-4z/3+4z^2/3).
$$

二次多项式在 $z_0$ 处为零，在 $1/2$ 处为 $2/3$。又 $e^{1/2}>0$，结论成立。这个论证覆盖所有系数指标，并不依赖只检查前 101 个系数。
:::

## 证据范围

闭区间结论与 Kummer 全称断言的否定具有上述精确公共 Lean 对应。完整射线定理、完全单调与 Bernstein 推论、严格数值链和明确 Kummer 零点以原文书面证明为依据；相关形式化工作链接见[来源与贡献](sources.md)。[附录](appendix.md)给出展开、连续性和无限尾项所需的细节。
