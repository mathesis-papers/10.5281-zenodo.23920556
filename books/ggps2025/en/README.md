# Why moving off the real axis breaks a bound

Think of a complex number $z=x+iy$ as a point in the plane: $x$ is its horizontal coordinate, $y$ its vertical coordinate, and $i^2=-1$. Keep the horizontal coordinate fixed and move vertically. Must the length of a function's output always be at least its value at the projection onto the real axis? This paper by Haobo Ma and Wenlin Zhang answers no. For a family of generalized exponential functions called Mittag–Leffler functions, there are counterexamples for every $1<\alpha<2$, persisting over a small interval of a second parameter. A related Kummer-function question has a counterexample obtained by substituting an exact zero.

## Start with the exponential

The modulus of a complex number is its distance from the origin: $|x+iy|=\sqrt{x^2+y^2}$. For example, $|3+4i|=5$. A function value is itself a complex number, so $|f(z)|$ measures the length of the **output**, not of the input. For the exponential, $|e^{x+iy}|=e^x$: changing the height rotates the output without changing its length. That length equals the value at $x$.

The question asks whether a lower bound survives for other functions:

$$
|f(x+iy)|\ge f(x).
$$

The right side is real and has no absolute value. If $f(x)\le0$, the inequality is automatic. A meaningful counterexample needs $f(x)>0$ and a shorter output off the real axis. **Global** means every complex input must satisfy the inequality; one strict failure disproves it.

## An exponential series with adjustable coefficients

Recall $e^z=1+z+z^2/2!+z^3/3!+\cdots$. The Mittag–Leffler function replaces the factorial denominators by an adjustable Gamma function:

$$
E_{\alpha,\beta}(z)=\sum_{k=0}^{\infty}\frac{z^k}{\Gamma(\alpha k+\beta)},\qquad \alpha>0.
$$

Gamma extends factorials to noninteger arguments: $\Gamma(n+1)=n!$ for nonnegative integers $n$, and $\Gamma(1/2)=\sqrt\pi$. At nonpositive integer poles of Gamma, reciprocal Gamma is defined to be zero. When $\alpha=\beta=1$, the series is the exponential. Changing the two parameters changes each term's weight, so its geometric properties need not survive.

In Conjecture 25 of [arXiv:2410.11852v4](https://arxiv.org/abs/2410.11852v4), R. Garrappa, S. Gerhold, M. Popolizio and T. Simon proposed that, for $1<\alpha<2$, the interval $\alpha-1\le\beta\le\alpha$ characterizes the global bound

$$
|E_{\alpha,\beta}(z)|\ge E_{\alpha,\beta}(\operatorname{Re}z).
$$

The present paper finds failures at the left endpoint $\beta=\alpha-1$ and extends them into the interior. The complete conclusion appears in [Statements and proofs](statements.md#ray-family).

## The decisive term disappears

Walk far along the negative real axis to $-r$, and compare the point $r(-1+it)$ directly above it, with fixed $t>0$. Their distances from the origin are $r$ and $r\sqrt{1+t^2}$.

The paper proves that, along suitable directions close to the negative real axis, at $\beta=\alpha-1$,

$$
E_{\alpha,\alpha-1}(z)=\frac{C_\alpha}{z^2}+O(|z|^{-3}),\qquad C_\alpha>0.
$$

The notation $O(|z|^{-3})$ says that the remainder's modulus is bounded by a fixed constant times $|z|^{-3}$ for sufficiently large inputs. It decays faster than the main term, whose size is proportional to $|z|^{-2}$. Why does the expansion start with an inverse square? The coefficient of the usual $z^{-1}$ term contains $1/\Gamma(-1)$, which is zero. The term vanishes exactly.

After multiplying by $r^2$, the two limits are

$$
r^2 E_{\alpha,\alpha-1}(-r)\longrightarrow C_\alpha,
$$

$$
r^2|E_{\alpha,\alpha-1}(r(-1+it))|\longrightarrow\frac{C_\alpha}{1+t^2}<C_\alpha.
$$

The more distant input produces the shorter output. Since the limits have a strictly positive gap, the inequality holds once the errors are small enough. This is how an approximation becomes a proof: control the remainder, then use the gap to obtain a threshold $R$ beyond which **every** radius fails the proposed bound.

The direction matters. The paper chooses $t=\tan(\pi(2-\alpha)/4)$ to keep the ray inside a sector where the expansion is valid. Neither endpoint $\alpha=1,2$ is included. The [appendix on the sector and remainder](appendix.md#sector-estimate) supplies the details.

## Why the failure persists inside the interval

First fix $\alpha$ and select one point $z$ where the inequality fails strictly. Now change $\beta$ while keeping $z$ fixed. The series is continuous in $\beta$, hence so is

$$
D(\beta)=E_{\alpha,\beta}(\operatorname{Re}z)-|E_{\alpha,\beta}(z)|.
$$

If $D(\alpha-1)>0$, a sufficiently small parameter change cannot instantly make it negative. Thus there is $0<\varepsilon<1$ such that the same point works for every $\beta\in[\alpha-1,\alpha-1+\varepsilon]$. Both $z$ and $\varepsilon$ may depend on $\alpha$; the paper gives no uniform numerical threshold.

This separates two kinds of regularity. Complete monotonicity is a derivative sign pattern on the positive real axis: $f>0$ and $(-1)^n f^{(n)}\ge0$ for every integer $n\ge0$. The original authors' Proposition 3 already proves this property for $1/E_{\alpha,\beta}$ throughout the proposed parameter interval. Their Remark 4(a) also gives a Bernstein property for the normalized logarithm. A Bernstein function is a nonnegative smooth function whose first derivative is completely monotone. Choosing $\beta=\alpha-1+\varepsilon/2$ gives an interior example where both positive-axis properties hold and the global complex bound fails. The new consequence uses the original authors' established properties.

## One concrete point, with a safety margin

For an explicit example, take $\alpha=3/2$, $\beta=1/2$ and $z_*=-115+10i$. The paper gives two strict bounds:

$$
|E_{3/2,1/2}(z_*)|<11\cdot10^{-6}+4\cdot10^{-13},
$$

$$
E_{3/2,1/2}(-115)>3\cdot10^{-5}-4\cdot10^{-13}.
$$

The first is smaller than the second. The key is not a long decimal output. The proof separates the first 64 terms from the infinite tail. Rational intervals enclose the finite sum, while each parity subsequence of the tail shrinks by a factor at most $1/2$. The total error is below $4\cdot10^{-13}$, much smaller than the gap. The [proof of Proposition 3](statements.md#rational-witness) explains how each error bound enters the final inequality.

## A second question: make the output exactly zero

The Kummer function also adjusts the coefficients of a series; the next chapter gives its definition. Remark 6 asks whether, for $a,d>0$ with denominator parameter $a-d$ outside the nonpositive integers, one always has

$$
|M(a,a-d,z)|\ge M(a,a-d,\operatorname{Re}z).
$$

Take $a=1/2,d=2$, so $a-d=-3/2$ is admissible. The paper reduces the entire series to

$$
M(1/2,-3/2,z)=e^z\left(1-\frac43z+\frac43z^2\right).
$$

The quadratic formula gives the root $z_0=1/2+i\sqrt2/2$. At its projection $1/2$, the polynomial equals $2/3$. The left side of the proposed bound is therefore zero, while the right side is $(2/3)e^{1/2}>0$. An exact substitution settles the comparison.

An earlier negative answer to Remark 6 appears in the Pudim AI Project's v016 manuscript of 14 June 2026. Its local example takes $a=1,d=5/2$ and fails at sufficiently small nonzero imaginary inputs. The present paper credits that work and gives the different exact-zero witness above. [Sources and contributions](sources.md) links both public sources.

The film connects the projection of a point, the inverse-square mechanism and the quadratic zero.

::: {.film src="001-modulus"}
A short explanation of the off-axis length comparison and an exact zero.
:::

The seminar presentation retains the parameter ranges, proof mechanism and exact scope of formal evidence.

::: {.slides src="seminar"}
Aligned Chinese and English academic slides with speaker notes.
:::

The result refutes the sufficiency direction of a **global** claim. It preserves the original right-half-plane bounds and is compatible with the compact-exception conclusion that excludes the endpoint. The classification for $\alpha\ge2$ is a separate question. The next chapter gives complete statements, written proofs and direct links to the Lean source.
