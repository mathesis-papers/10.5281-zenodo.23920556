# Appendix: expansion, continuity and the finite certificate

This appendix supplies the three arguments used in [Statements and proofs](statements.md), following source Sections 2 and 3.

## Sector expansion and remainder {#sector-estimate}

Fix $1<\alpha<2$. Choose $\pi/2<\theta<\pi/\alpha$ and use principal powers. Let $H_{\theta,\delta}$ run from infinity down the ray $\arg u=-\theta$ to radius $\delta$, counterclockwise along the circular arc to the upper ray, and back to infinity. Hankel's formula (DLMF 5.9.2), with contour deformation in the left half-plane at infinity, gives

$$
\frac1{2\pi i}\int_{H_{\theta,\delta}}e^u u^{-s}\,du=\frac1{\Gamma(s)}.
$$

Initially choose $\delta>|z|^{1/\alpha}$. On the entire contour, $|z/u^\alpha|\le |z|/\delta^\alpha<1$, so the geometric series converges uniformly. On the rays, $e^u$ decays exponentially because $\cos\theta<0$. These bounds justify termwise integration and give

$$
E_{\alpha,\beta}(z)=\frac1{2\pi i}\int_{H_{\theta,\delta}}\frac{e^u u^{\alpha-\beta}}{u^\alpha-z}\,du.
$$

If $|\arg z|>\alpha\theta$, the equation $u^\alpha=z$ has no solution in $|\arg u|\le\theta$, since $\alpha\theta<\pi$. For $|z|>1$, the contour radius can therefore be decreased to $1$ without crossing a pole.

At $\beta=\alpha-1$, the numerator is $u$. Substitute

$$
\frac1{u^\alpha-z}=-\frac1z-\frac{u^\alpha}{z^2}-\frac{u^{2\alpha}}{z^2(u^\alpha-z)}
$$

and integrate using Hankel's formula. The $z^{-1}$ coefficient is $-1/\Gamma(-1)=0$. The next term yields

$$
E_{\alpha,\alpha-1}(z)=\frac{C_\alpha}{z^2}+O(|z|^{-3}),
$$

$$
C_\alpha=-\frac1{\Gamma(-\alpha-1)}=\frac{\alpha(\alpha^2-1)}{\Gamma(2-\alpha)}>0.
$$

The last identity follows from three Gamma recurrences. Since $2-\alpha>0$, the coefficient is strictly positive.

Fix an exterior ray separated in angle from the contour boundary. Angular separation gives $c>0$ such that $|u^\alpha-z|\ge c(|u|^\alpha+|z|)$; the circular arc satisfies a bound of the same form for sufficiently large $|z|$. The remaining integral has modulus at most

$$
\frac{|z|^{-3}}{2\pi c}\int_{H_{\theta,1}}|e^u|\,|u|^{2\alpha+1}\,|du|.
$$

The integral is finite, proving the required remainder estimate. If $\eta=\pi(2-\alpha)/4$ and $w=-1+i\tan\eta$, then $\arg w=\pi-\eta>\alpha\pi/2$. Thus one can choose $\pi/2<\theta<(\pi-\eta)/\alpha$ for both the ray through $w$ and the negative real axis. Substitute $z=rw$ and $z=-r$, and multiply by $r^2$. The remainders tend to zero, giving exactly the two limits used in the story.

## Continuity in the parameter {#beta-continuity}

Fix $1<\alpha<2$ and complex $z$, and work on a compact positive parameter interval containing $\alpha-1>0$ in its interior. Real Stirling asymptotics (DLMF 5.11.3) give, uniformly for sufficiently large $k$,

$$
\frac1{\Gamma(\alpha k+\beta)}\le\exp\left(-\frac\alpha2 k\log k\right).
$$

After multiplication by $|z|^k$, the bound has $k$th root $|z|k^{-\alpha/2}\to0$, hence is summable. Every term is continuous in $\beta$, and this summable majorant gives local uniform convergence, so the sum is continuous. This justifies the limiting passage when Theorem 1 changes the parameter after fixing a point.

## Finite certificate and infinite tail {#finite-certificate}

For $(\alpha,\beta)=(3/2,1/2)$, pair the first 64 terms by parity. The integer and half-integer Gamma formulas give

$$
S(z)=\rho A(z)+B(z),\qquad \rho=1/\sqrt\pi,
$$

$$
A(z)=\sum_{j=0}^{31}\frac{2^{3j}z^{2j}}{(6j-1)!!},
$$

$$
B(z)=\sum_{j=0}^{31}\frac{z^{2j+1}}{(3j+1)!}.
$$

Here $(-1)!!=1$; a double factorial multiplies successive integers of the same parity. First enclose the one constant needed by rational numbers:

$$
L=\frac{56418958354775628694}{10^{20}}<\rho,
$$

$$
\rho<U=\frac{56418958354775628696}{10^{20}}.
$$

These endpoints follow from Machin's identity $\pi=16\arctan(1/5)-4\arctan(1/239)$. Truncate $\arctan x=\sum_{j\ge0}(-1)^j x^{2j+1}/(2j+1)$ at lengths $40,41$ and $12,13$, respectively. Alternating-series bounds enclose the two arctangents. If $p_-<\pi<p_+$ results, the rational comparisons $L^2p_+<1<U^2p_-$ establish the bounds on reciprocal square root. Machin's identity follows by checking $\tan(4\arctan(1/5))=120/119$ and $\tan(4\arctan(1/5)-\arctan(1/239))=1$; the latter angle lies in $(0,\pi/2)$.

Substitute $L,U$ into $\rho A+B$, choosing endpoints according to the signs of the real and imaginary parts of $A$. The source's accompanying certificate records the resulting rational enclosures:

| Quantity | Lower endpoint | Upper endpoint |
| --- | --- | --- |
| $S(-115)$ | $92505162023/2500000000000000$ | $92507838829/2500000000000000$ |
| $\operatorname{Re}S(z_*)$ | $-9628631101/10^{16}$ | $-9626762303/10^{16}$ |
| $\operatorname{Im}S(z_*)$ | $-89102285761/10^{16}$ | $-17818302249/(2\cdot10^{15})$ |

They strictly imply $S(-115)>3\cdot10^{-5}$, $|\operatorname{Re}S(z_*)|<10^{-6}$ and $|\operatorname{Im}S(z_*)|<10^{-5}$, respectively.

Now let $T_k(z)=z^k/\Gamma(3k/2+1/2)$. Gamma recurrence gives

$$
\begin{gathered}
T_{k+2}(z)=\frac{z^2T_k(z)}{s(s+1)(s+2)},\\
s=3k/2+1/2,\quad k\ge0.
\end{gathered}
$$

For $|z|\le125$ and $k\ge64$, one has $s\ge193/2$ and therefore $|T_{k+2}|\le|T_k|/2$. The two initial terms satisfy

$$
|T_{64}|\le\frac{125^{64}2^{96}}{191!!}<10^{-13},
$$

$$
|T_{65}|\le\frac{125^{65}}{97!}<\frac34\,10^{-13}.
$$

The two parity tails together are consequently smaller than $2(1+3/4)10^{-13}<4\cdot10^{-13}$. Both points are covered: $|-115|=115<125$, and $|z_*|^2=13325<125^2$. Combining the finite enclosures with this infinite-tail estimate proves source Proposition 3.
