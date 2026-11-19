'use strict';
// The shared engine supplies drawing, timing, palette and evidence badges.
// Schematic geometry and leading-term bars explain the mechanism; no numerical
// Mittag--Leffler evaluation is represented by the animation.
function heading(S, en, zh) {
  const a = clamp(S.u / 0.5);
  txt(en, 960, 211, {size: 45, fam: F.disp, w: 700, align: 'center', c: C.white, a});
  txt(zh, 960, 264, {size: 31, fam: F.zh, align: 'center', c: C.dim, a});
}
function formula(s, x, y, size = 45, c = C.white, a = 1) {
  txt(s, x, y, {size, fam: F.math, align: 'center', c, a});
}
function plane(x, y, w, h, a = 1) {
  const ox = x + w * .75, oy = y + h * .75;
  arrow(x + 30, oy, x + w - 25, oy, C.dim, a);
  arrow(ox, y + h - 20, ox, y + 30, C.dim, a);
  txt('Re z', x + w - 100, oy + 42, {size: 24, c: C.dim, a});
  txt('Im z', ox + 20, y + 50, {size: 24, c: C.dim, a});
  return {ox, oy};
}
SCENES.question = S => {
  badgeQ(S, [[0, 'horizontal coordinate', 'argued']]);
  heading(S, 'MUST AN OUTPUT GET LONGER?', '离开实轴，输出一定变长吗？');
  panel(130, 320, 820, 500, 1, C.cyan, 'INPUT PLANE');
  const {ox, oy} = plane(130, 320, 820, 500);
  const x = ox - 310, y = oy - 210 * ease(at(S, 0, 3));
  dashed(x, oy, x, y, C.cyan, 1);
  dot(x, oy, 9, 'c'); dot(x, y, 12, 'm');
  txt('x', x - 32, oy + 40, {size: 30, fam: F.math});
  txt('x + iy', x - 70, y - 25, {size: 33, fam: F.math});
  panel(1000, 320, 790, 500, 1, C.cyan, 'OUTPUT LENGTH');
  formula('|exp(x + iy)| = exp(x)', 1395, 470, 43);
  formula('|f(x + iy)| ≥ f(x) ?', 1395, 620, 45, C.cyan, at(S, 1, .8));
  txt('Right side has no absolute value', 1395, 735, {size: 26, fam: F.disp, align: 'center', c: C.dim, a: at(S, 2, .6)});
};
SCENES.series = S => {
  badgeQ(S, [[0, 'two parameters', 'argued']]);
  heading(S, 'THE FIRST TERM DISAPPEARS', '决定机制：首项系数为零');
  panel(180, 330, 1560, 475, 1, C.argued, 'SOURCE SERIES AND ASYMPTOTIC MECHANISM');
  formula('Eα,β(z) = Σ  zᵏ / Γ(αk + β)', 960, 440, 53);
  formula('sum over k ≥ 0', 960, 485, 25, C.dim);
  formula('1 < α < 2       β = α − 1', 960, 535, 43, C.cyan, at(S, 1, .7));
  formula('−1 / Γ(−1) = 0', 590, 650, 47, C.mag, at(S, 1, .7));
  formula('E(z) = Cα / z² + smaller error', 1200, 735, 42, C.white, at(S, 2, .7));
  txt('Cα > 0; valid exterior sector near the negative real axis', 960, 795, {size: 27, fam: F.disp, align: 'center', c: C.dim, a: at(S, 2, .7)});
};
SCENES.geometry = S => {
  badgeQ(S, [[0, 'fixed positive tilt', 'argued']]);
  heading(S, 'FARTHER INPUT, SHORTER OUTPUT', '平方倒数把距离关系反过来');
  panel(110, 325, 820, 490, 1, C.cyan, 'INPUT: SCHEMATIC RAY');
  const {ox, oy} = plane(110, 325, 820, 490);
  const q = .5 + .5 * ease(at(S, 0, 3)), px = ox - 360 * q, py = oy - 205 * q;
  arrow(ox, oy, px, py, C.mag, 1);
  line(ox, oy, px, oy, C.cyan);
  dashed(px, oy, px, py, C.dim, 1);
  dot(px, oy, 9, 'c'); dot(px, py, 11, 'm');
  txt('−r', px - 30, oy + 42, {size: 30, fam: F.math});
  txt('r(−1 + it)', px - 60, py - 25, {size: 32, fam: F.math});
  panel(990, 325, 820, 490, 1, C.argued, 'SCALED LIMITS: NOT FINITE-r VALUES');
  const a = at(S, 1, .7);
  txt('real axis', 1050, 430, {size: 30, fam: F.disp, a});
  line(1050, 470, 1710, 470, C.cyan, a, 22);
  formula('Cα', 1710, 435, 40, C.cyan, a);
  txt('tilted ray', 1050, 575, {size: 30, fam: F.disp, a});
  line(1050, 615, 1510, 615, C.mag, a, 22);
  formula('Cα / (1 + t²)', 1390, 680, 42, C.mag, a);
  formula('strict gap  +  error → 0', 1400, 770, 35, C.white, at(S, 2, .7));
};
SCENES.continuity = S => {
  badgeQ(S, [[0, 'point fixed', 'argued']]);
  heading(S, 'KEEP THE POINT; CHANGE THE PARAMETER', '固定一个点，得到一段参数');
  panel(180, 330, 1560, 480, 1, C.argued, 'CONTINUITY PRESERVES A STRICT GAP');
  formula('D(β) = Eα,β(Re z) − |Eα,β(z)|', 960, 440, 49);
  const l = 450, rr = 1480, yy = 650;
  arrow(l - 100, yy, rr + 130, yy, C.dim, 1);
  const a = at(S, 1, .8);
  line(l, yy, l + (rr - l) * a, yy, C.mag, 1, 14);
  dot(l, yy, 12, 'm'); dot(l + (rr - l) * a, yy, 12, 'm');
  formula('α − 1', l, yy + 65, 38);
  formula('α − 1 + ε', rr, yy + 65, 38, C.white, a);
  formula('D(β) > 0', 960, 565, 46, C.mag, a);
  txt('One point works on the entire closed interval', 960, 755, {size: 31, fam: F.disp, align: 'center', c: C.white, a});
  txt('Interior CM reciprocal + Bernstein logarithm; global bound fails', 960, 805, {size: 26, fam: F.disp, align: 'center', c: C.dim, a: at(S, 2, .7)});
};
SCENES.certificate = S => {
  badgeQ(S, [[0, 'concrete example', 'argued']]);
  heading(S, 'AN EXPLICIT POINT WITH A SAFETY MARGIN', '有限有理区间 + 无限尾界');
  formula('α = 3/2,   β = 1/2,   z* = −115 + 10i', 960, 350, 44);
  panel(160, 400, 770, 390, 1, C.cyan, 'OFF AXIS: UPPER BOUND');
  panel(990, 400, 770, 390, 1, C.cyan, 'REAL AXIS: LOWER BOUND');
  formula('|E(z*)| <', 545, 510, 44);
  formula('11 × 10⁻⁶ + 4 × 10⁻¹³', 545, 595, 45);
  formula('E(−115) >', 1375, 510, 44);
  formula('3 × 10⁻⁵ − 4 × 10⁻¹³', 1375, 595, 45);
  txt('64 terms: rational enclosures', 545, 720, {size: 29, fam: F.disp, align: 'center', c: C.dim, a: at(S, 1, .7)});
  txt('Tail: even / odd geometric sums', 1375, 720, {size: 29, fam: F.disp, align: 'center', c: C.dim, a: at(S, 1, .7)});
  formula('tail < 4 × 10⁻¹³  ≪  comparison gap', 960, 825, 39, C.mag, at(S, 2, .7));
};
SCENES.kummer = S => {
  badgeQ(S, [[0, 'complex root', 'argued']]);
  heading(S, 'A QUADRATIC MAKES THE OUTPUT ZERO', '精确零点与正的实轴值');
  formula('M(1/2, −3/2, z) = exp(z) (1 − 4z/3 + 4z²/3)', 960, 365, 43);
  panel(180, 420, 750, 360, 1, C.argued, 'COMPLEX ROOT');
  panel(990, 420, 750, 360, 1, C.argued, 'REAL PROJECTION');
  formula('z₀ = 1/2 + i√2/2', 555, 530, 48);
  formula('|M(z₀)| = 0', 555, 655, 58, C.mag);
  formula('Re z₀ = 1/2', 1365, 530, 48);
  formula('M(1/2) = (2/3) exp(1/2) > 0', 1365, 655, 35, C.cyan, at(S, 1, .7));
  txt('Earlier local Kummer example: Pudim AI Project, v016, 2026-06-14', 960, 805, {size: 26, fam: F.disp, align: 'center', c: C.dim, a: at(S, 2, .7)});
};
FILM.poster = () => {
  txt('WHY A COMPLEX LOWER BOUND FAILS', 960, 245, {size: 63, fam: F.disp, w: 700, align: 'center', c: C.white});
  txt('离开实轴，下界为何失效', 960, 335, {size: 54, fam: F.zh, align: 'center', c: C.cyan});
  panel(220, 420, 1480, 330, 1, C.argued, 'THE INVERSE-SQUARE MECHANISM');
  formula('same real part:   −r    and    r(−1 + it)', 960, 530, 50);
  formula('Cα / (1 + t²)  <  Cα', 960, 655, 72, C.mag);
  txt('Haobo Ma · Wenlin Zhang', 960, 850, {size: 36, fam: F.disp, align: 'center', c: C.white});
};
