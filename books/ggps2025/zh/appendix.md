# 附录：展开、连续性与有限证书

本附录补足[严格陈述](statements.md)所依赖的三段论证；依据原文第 2、3 节。

## 扇形展开与余项 {#sector-estimate}

固定 $1<\alpha<2$。取 $\pi/2<\theta<\pi/\alpha$，以主值定义复幂。令 $H_{\theta,\delta}$ 从下射线 $\arg u=-\theta$ 的无穷远走到半径 $\delta$，沿圆弧逆时针转至上射线，再走向无穷远。Hankel 公式（DLMF 5.9.2）及无穷远处左半平面内的轮廓变形给出

$$
\frac1{2\pi i}\int_{H_{\theta,\delta}}e^u u^{-s}\,du=\frac1{\Gamma(s)}.
$$

先取 $\delta>|z|^{1/\alpha}$。在整条轮廓上，$|z/u^\alpha|\le |z|/\delta^\alpha<1$，所以几何级数一致收敛；射线上的 $e^u$ 因 $\cos\theta<0$ 而指数衰减。这些界允许逐项积分，得到

$$
E_{\alpha,\beta}(z)=\frac1{2\pi i}\int_{H_{\theta,\delta}}\frac{e^u u^{\alpha-\beta}}{u^\alpha-z}\,du.
$$

若 $|\arg z|>\alpha\theta$，则 $u^\alpha=z$ 在 $|\arg u|\le\theta$ 内无解，因为 $\alpha\theta<\pi$。因此在 $|z|>1$ 时可把半径缩到 $1$，不穿过极点。

令 $\beta=\alpha-1$，分子成为 $u$。代入

$$
\frac1{u^\alpha-z}=-\frac1z-\frac{u^\alpha}{z^2}-\frac{u^{2\alpha}}{z^2(u^\alpha-z)}
$$

并用 Hankel 公式积分。$z^{-1}$ 项的系数是 $-1/\Gamma(-1)=0$；下一项给出

$$
E_{\alpha,\alpha-1}(z)=\frac{C_\alpha}{z^2}+O(|z|^{-3}),
$$

$$
C_\alpha=-\frac1{\Gamma(-\alpha-1)}=\frac{\alpha(\alpha^2-1)}{\Gamma(2-\alpha)}>0.
$$

最后的等式用 Gamma 递推三次得到；$2-\alpha>0$，因此系数严格为正。

固定一条与轮廓边界角度分离的外部射线。角度分离给出 $c>0$，使 $|u^\alpha-z|\ge c(|u|^\alpha+|z|)$；圆弧部分对充分大的 $|z|$ 也有同类界。剩余积分的模不超过

$$
\frac{|z|^{-3}}{2\pi c}\int_{H_{\theta,1}}|e^u|\,|u|^{2\alpha+1}\,|du|.
$$

积分有限，证明所需余项界。若 $\eta=\pi(2-\alpha)/4$、$w=-1+i\tan\eta$，则 $\arg w=\pi-\eta>\alpha\pi/2$。故可选 $\pi/2<\theta<(\pi-\eta)/\alpha$，同时适用于 $w$ 的射线和负实轴。代入 $z=rw$ 与 $z=-r$，乘以 $r^2$，余项趋零，恰得正文的两个极限。

## 参数连续性 {#beta-continuity}

固定 $1<\alpha<2$ 与复数 $z$，在包含 $\alpha-1>0$ 的一个紧正参数区间上工作。由实 Stirling 公式（DLMF 5.11.3），对充分大的 $k$，一致地有

$$
\frac1{\Gamma(\alpha k+\beta)}\le\exp\left(-\frac\alpha2 k\log k\right).
$$

乘上 $|z|^k$ 后，所得上界的 $k$ 次方根为 $|z|k^{-\alpha/2}\to0$，因此可求和。每一项对 $\beta$ 连续，一致可求和上界使级数局部一致收敛，故其和连续。这正是定理 1 固定点后改变参数所用的极限交换依据。

## 有限证书与无限尾项 {#finite-certificate}

对 $(\alpha,\beta)=(3/2,1/2)$，将前 64 项按奇偶配对。Gamma 的整数和半整数公式给出

$$
S(z)=\rho A(z)+B(z),\qquad \rho=1/\sqrt\pi,
$$

$$
A(z)=\sum_{j=0}^{31}\frac{2^{3j}z^{2j}}{(6j-1)!!},
$$

$$
B(z)=\sum_{j=0}^{31}\frac{z^{2j+1}}{(3j+1)!}.
$$

其中 $(-1)!!=1$；一般双阶乘是同奇偶整数依次相乘的积。先用有理数夹住唯一需要的常数：

$$
L=\frac{56418958354775628694}{10^{20}}<\rho,
$$

$$
\rho<U=\frac{56418958354775628696}{10^{20}}.
$$

这些端点可由 Machin 恒等式 $\pi=16\arctan(1/5)-4\arctan(1/239)$ 获得。将 $\arctan x=\sum_{j\ge0}(-1)^j x^{2j+1}/(2j+1)$ 分别在长度 $40,41$ 与 $12,13$ 截断，以交错级数夹住两个反正切。若结果为 $p_-<\pi<p_+$，直接比较有理数 $L^2p_+<1<U^2p_-$ 即推出上界和下界。Machin 恒等式可由 $\tan(4\arctan(1/5))=120/119$ 及 $\tan(4\arctan(1/5)-\arctan(1/239))=1$ 检查；后一角位于 $(0,\pi/2)$。

把 $L,U$ 代入 $\rho A+B$，按 $A$ 的实部、虚部符号选取相应端点即可进行有理区间运算。原文随附的证书记录了以下有理包围区间：

| 量 | 下端点 | 上端点 |
| --- | --- | --- |
| $S(-115)$ | $92505162023/2500000000000000$ | $92507838829/2500000000000000$ |
| $\operatorname{Re}S(z_*)$ | $-9628631101/10^{16}$ | $-9626762303/10^{16}$ |
| $\operatorname{Im}S(z_*)$ | $-89102285761/10^{16}$ | $-17818302249/(2\cdot10^{15})$ |

它们分别严格蕴含 $S(-115)>3\cdot10^{-5}$、$|\operatorname{Re}S(z_*)|<10^{-6}$、$|\operatorname{Im}S(z_*)|<10^{-5}$。

再令 $T_k(z)=z^k/\Gamma(3k/2+1/2)$。Gamma 递推给出

$$
\begin{gathered}
T_{k+2}(z)=\frac{z^2T_k(z)}{s(s+1)(s+2)},\\
s=3k/2+1/2,\quad k\ge0.
\end{gathered}
$$

若 $|z|\le125$ 且 $k\ge64$，则 $s\ge193/2$，所以 $|T_{k+2}|\le|T_k|/2$。初始两项满足

$$
|T_{64}|\le\frac{125^{64}2^{96}}{191!!}<10^{-13},
$$

$$
|T_{65}|\le\frac{125^{65}}{97!}<\frac34\,10^{-13}.
$$

因此两个奇偶尾项之和严格小于 $2(1+3/4)10^{-13}<4\cdot10^{-13}$。$|-115|=115<125$，且 $|z_*|^2=13325<125^2$，两处均适用。前 64 项的区间与这个无限尾界合起来才证明原文命题 3。
