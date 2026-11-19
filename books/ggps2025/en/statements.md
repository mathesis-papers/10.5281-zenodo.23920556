# Statements and proofs

The source-result names below retain the manuscript numbering; the book supplies its own displayed numbering. Define

$$
E_{\alpha,\beta}(z)=\sum_{k=0}^{\infty}\frac{z^k}{\Gamma(\alpha k+\beta)},\qquad \alpha>0,\quad\beta\in\mathbb R,
$$

Let $G(\alpha,\beta)$ mean $|E_{\alpha,\beta}(z)|\ge E_{\alpha,\beta}(\operatorname{Re}z)$ for every $z\in\mathbb C$. The series is real-valued on the real axis. Reciprocal Gamma is zero at nonpositive integers.

::: {.theorem #ray-family title="Ray and parameter interval" mathesis="collected:ggps2025:1:s1" status="written-proof" proof="pf-ray-family" doi="10.5281/zenodo.23920557" source="Theorem 1" request="https://github.com/the-omega-institute/trureturing-requests/issues/165"}
Fix $1<\alpha<2$ and put

$$
\begin{gathered}
\eta=\frac{\pi(2-\alpha)}4,\\
t=\tan\eta,\qquad w=-1+it.
\end{gathered}
$$

There is $R>0$ such that every real $r>R$ satisfies

$$
|E_{\alpha,\alpha-1}(rw)|<E_{\alpha,\alpha-1}(-r).
$$

Moreover, one such point $z=rw$ and $0<\varepsilon<1$ can be chosen so that every $\beta\in[\alpha-1,\alpha-1+\varepsilon]$ satisfies

$$
|E_{\alpha,\beta}(z)|<E_{\alpha,\beta}(\operatorname{Re}z).
$$
:::

::: {.proof #pf-ray-family}
By the remainder estimate in the [appendix](appendix.md#sector-estimate), the two scaled quantities tend to $C_\alpha$ and $C_\alpha/(1+t^2)$, with $C_\alpha>0$ and $t>0$. Put $g=C_\alpha-C_\alpha/(1+t^2)>0$. Choose $R>0$ so that for $r>R$ each scaled quantity is within $g/3$ of its limit. The ray quantity is then smaller than the axis quantity. Division by $r^2>0$ proves the first conclusion; the axis value is eventually positive as well. Fix any such $r$. The [parameter continuity argument](appendix.md#beta-continuity) keeps the positive difference positive in an open neighborhood of $\alpha-1$. If its radius is $\delta>0$, choose $\varepsilon=\min(\delta/2,1/2)$. This gives the closed interval, including its endpoints, and is the argument of source Theorem 1.
:::

The following isolates the closed-interval part of Theorem 1, for which there is an exact public Lean statement. It does not include the quantifier over every sufficiently large radius.

::: {.theorem #closed-family title="One point, a closed interval" mathesis="collected:ggps2025:1:s1" lean="D5/S3/Analytic/Asymptotics/MittagLefflerModulusRefutation.source_closed_beta_family"}
For the convergent source-series family above and every real $1<\alpha<2$, there exist $z\in\mathbb C$ and real $0<\varepsilon<1$ such that $\operatorname{Im}z>0$, $z=rw$ for some $r>0$, and, for all $\beta\in[\alpha-1,\alpha-1+\varepsilon]$, $|E_{\alpha,\beta}(z)|<E_{\alpha,\beta}(\operatorname{Re}z)$. Here $w=-1+i\tan(\pi(2-\alpha)/4)$. 
:::

The proof is the fixed-point and continuity part of the preceding argument. The theorem link opens its Lean statement, whose hypothesis requires the family to be given by the convergent source series.

::: {.corollary #cm-separation title="Positive-axis regularity" mathesis="collected:ggps2025:1:s2" status="written-proof" proof="pf-cm-separation" doi="10.5281/zenodo.23920557" source="Corollary 2" request="https://github.com/the-omega-institute/trureturing-requests/issues/166"}
For every $1<\alpha<2$, there is $\beta\in(\alpha-1,\alpha)$ such that $1/E_{\alpha,\beta}$ is positive and completely monotone on $(0,\infty)$, $\log(\Gamma(\beta)E_{\alpha,\beta})$ is a Bernstein function there, and $G(\alpha,\beta)$ is false.
:::

::: {.proof #pf-cm-separation}
Choose $\beta=\alpha-1+\varepsilon/2$ from the closed-interval conclusion. Since $0<\varepsilon<1$, this lies strictly in $(\alpha-1,\alpha)$. The same $z$ falsifies $G$. Proposition 3 of GGPS gives complete monotonicity of the reciprocal at this parameter. Remark 4(a) gives $E_{\alpha,\beta}(x)=\exp(\phi_{\alpha,\beta}(x))/\Gamma(\beta)$ with $\phi$ Bernstein, so the normalized logarithm is precisely $\phi$. Here $\beta>0$, making Gamma positive and the normalization valid.
:::

::: {.proposition #rational-witness title="Rational certificate" mathesis="collected:ggps2025:1:s3" status="written-proof" proof="pf-rational-witness" doi="10.5281/zenodo.23920557" source="Proposition 3" request="https://github.com/the-omega-institute/trureturing-requests/issues/167"}
Put $z_*=-115+10i$. Then

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
Let $S$ be the first 64 terms. The [rational intervals in the appendix](appendix.md#finite-certificate) give $S(-115)>3/10^5$, $|\operatorname{Re}S(z_*)|<10^{-6}$, $|\operatorname{Im}S(z_*)|<10^{-5}$, and the strict tail bound $|E-S|<4\cdot10^{-13}$ at both points. The triangle inequality gives $|S(z_*)|<11/10^6$. Adding the tail bound to the upper bound and subtracting it from the lower bound gives the first and last strict inequalities. The middle comparison is the rational inequality $19\cdot10^{-6}>8\cdot10^{-13}$. The finite intervals are reported in the source certificate; their construction is given in the appendix, while the tail argument supplies the necessary passage to the infinite series.
:::

## The Kummer function

$$
\begin{gathered}
M(a,b,z)=\sum_{n=0}^{\infty}\frac{(a)_n}{(b)_n}\frac{z^n}{n!},\\
b\notin\{0,-1,-2,\ldots\}.
\end{gathered}
$$

Here $(a)_0=1$ and $(a)_n=a(a+1)\cdots(a+n-1)$ for $n\ge1$.

::: {.proposition #kummer-negation title="Failure of the Kummer bound" mathesis="collected:ggps2025:1:s4" lean="D5/S3/Analytic/KummerModulusLowerBound/Result.result"}
The following universal assertion is false: for every real $a,d>0$ with $a-d\notin\{0,-1,-2,\ldots\}$ and every $z\in\mathbb C$, $M(a,a-d,\operatorname{Re}z)\le |M(a,a-d,z)|$.
:::

This public Lean statement negates the universal assertion. Source Proposition 4 below separately retains the explicit parameters, zero and values. These are not added to the preceding statement.

::: {.proposition #kummer-witness title="An exact Kummer zero" mathesis="collected:ggps2025:1:s4" status="written-proof" proof="pf-kummer-witness" doi="10.5281/zenodo.23920557" source="Proposition 4" request="https://github.com/the-omega-institute/trureturing-requests/issues/168"}
Take $a=1/2,d=2$, so $b=a-d=-3/2$ is admissible. At $z_0=1/2+i\sqrt2/2$, the inequality in Remark 6 fails, with

$$
\begin{gathered}
|M(1/2,-3/2,z_0)|=0,\\
M(1/2,-3/2,1/2)=\frac23e^{1/2}>0.
\end{gathered}
$$
:::

::: {.proof #pf-kummer-witness}
For every integer $n\ge0$, the rising-factorial multiplication identity

$$
\begin{aligned}
(-3/2)_{n+2}&=(-3/2)_2(1/2)_n\\
&=(-3/2)_n(n-3/2)(n-1/2)
\end{aligned}
$$

gives, including $n=0,1$,

$$
\frac{(1/2)_n}{(-3/2)_n}=1-\frac43n+\frac43n(n-1).
$$

The denominator is nonzero. Absolute convergence and the identities $\sum z^n/n!=e^z$, $\sum nz^n/n!=ze^z$, $\sum n(n-1)z^n/n!=z^2e^z$, obtained by removing zero terms and shifting indices, give

$$
M(1/2,-3/2,z)=e^z(1-4z/3+4z^2/3).
$$

The quadratic is zero at $z_0$ and equals $2/3$ at $1/2$. Since $e^{1/2}>0$, the conclusion follows. This argument covers every coefficient index and does not rely on the supplementary check of the first 101 coefficients.
:::

## Scope of evidence

The closed-interval conclusion and the negation of the universal Kummer assertion have the exact public Lean counterparts linked above. The full ray theorem, the CM/Bernstein corollary, the strict numerical chain and the explicit Kummer zero use the manuscript proofs; focused formalization work is linked in [Sources and contributions](sources.md). The [appendix](appendix.md) supplies the expansion, continuity and infinite-tail details.
