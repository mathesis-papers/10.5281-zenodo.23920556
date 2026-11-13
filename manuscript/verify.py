from fractions import Fraction
from math import factorial, prod
import json

if not __debug__:
    raise RuntimeError('Use Python without optimization so every rational comparison is evaluated.')


def arctangent_bounds(denominator, count):
    partial = sum((Fraction((-1) ** index, (2 * index + 1) * denominator ** (2 * index + 1)) for index in range(count)), Fraction(0))
    following = partial + Fraction((-1) ** count, (2 * count + 1) * denominator ** (2 * count + 1))
    return min(partial, following), max(partial, following)


def complex_multiply(left, right):
    return left[0] * right[0] - left[1] * right[1], left[0] * right[1] + left[1] * right[0]


def scalar_interval(coefficient, lower, upper):
    return min(coefficient * lower, coefficient * upper), max(coefficient * lower, coefficient * upper)


def partial_bounds(real_part, imaginary_part, rho_lower, rho_upper):
    even = [Fraction(0), Fraction(0)]
    odd = [Fraction(0), Fraction(0)]
    power = (1, 0)
    for index in range(64):
        if index % 2 == 0:
            half_index = index // 2
            coefficient = Fraction(2 ** (3 * half_index), prod(range(1, 6 * half_index, 2)))
            for component in range(2):
                even[component] += power[component] * coefficient
        else:
            coefficient = Fraction(1, factorial(3 * (index // 2) + 1))
            for component in range(2):
                odd[component] += power[component] * coefficient
        power = complex_multiply(power, (real_part, imaginary_part))
    result = []
    for component in range(2):
        lower, upper = scalar_interval(even[component], rho_lower, rho_upper)
        result.append((lower + odd[component], upper + odd[component]))
    return result


def magnitude_bound(interval):
    return max(abs(interval[0]), abs(interval[1]))


def decimal_bounds(interval, digits=16):
    scale = 10 ** digits
    lower = interval[0] * scale
    upper = interval[1] * scale
    lower_integer = lower.numerator // lower.denominator
    upper_integer = -((-upper.numerator) // upper.denominator)
    return [str(Fraction(lower_integer, scale)), str(Fraction(upper_integer, scale))]


def verify():
    atan_five = arctangent_bounds(5, 40)
    atan_239 = arctangent_bounds(239, 12)
    pi_lower = 16 * atan_five[0] - 4 * atan_239[1]
    pi_upper = 16 * atan_five[1] - 4 * atan_239[0]
    rho_lower = Fraction(56418958354775628694, 10 ** 20)
    rho_upper = Fraction(56418958354775628696, 10 ** 20)
    assert rho_lower > 0 and rho_lower ** 2 * pi_upper < 1
    assert rho_upper ** 2 * pi_lower > 1
    axis = partial_bounds(-115, 0, rho_lower, rho_upper)
    point = partial_bounds(-115, 10, rho_lower, rho_upper)
    assert axis[0][0] > Fraction(3, 100000)
    assert magnitude_bound(point[0]) < Fraction(1, 1000000)
    assert magnitude_bound(point[1]) < Fraction(1, 100000)
    even_initial = Fraction(125 ** 64 * 2 ** 96, prod(range(1, 192, 2)))
    odd_initial = Fraction(125 ** 65, factorial(97))
    assert even_initial < Fraction(1, 10 ** 13)
    assert odd_initial < Fraction(3, 4 * 10 ** 13)
    minimum_argument = Fraction(193, 2)
    assert Fraction(125 ** 2, 1) / (minimum_argument * (minimum_argument + 1) * (minimum_argument + 2)) < Fraction(1, 2)
    tail = Fraction(4, 10 ** 13)
    axis_lower = Fraction(3, 100000) - tail
    point_upper = Fraction(11, 1000000) + tail
    assert point_upper < axis_lower
    assert 115 ** 2 + 10 ** 2 < 125 ** 2
    for index in range(101):
        rising_top = prod((Fraction(1, 2) + offset for offset in range(index)), start=Fraction(1))
        rising_bottom = prod((Fraction(-3, 2) + offset for offset in range(index)), start=Fraction(1))
        assert rising_bottom != 0
        assert rising_top / rising_bottom == 1 - Fraction(4, 3) * index + Fraction(4, 3) * index * (index - 1)
    constant_coefficient = 1 - Fraction(4, 3) * Fraction(1, 2) + Fraction(4, 3) * (Fraction(1, 4) - Fraction(1, 2))
    imaginary_coefficient = -Fraction(4, 3) * Fraction(1, 2) + Fraction(4, 3) * Fraction(1, 2)
    assert constant_coefficient == 0 and imaginary_coefficient == 0
    assert 1 - Fraction(4, 3) * Fraction(1, 2) + Fraction(4, 3) * Fraction(1, 4) == Fraction(2, 3)
    assert Fraction(-2, 3) ** 2 - 2 * Fraction(4, 3) == Fraction(-20, 9)
    return {
        'status': 'pass',
        'arithmetic': 'exact rational arithmetic',
        'mittag_leffler': {
            'alpha': '3/2', 'beta': '1/2', 'point': '-115+10i',
            'partial_terms': 64,
            'rho_interval': [str(rho_lower), str(rho_upper)],
            'partial_axis_interval': decimal_bounds(axis[0]),
            'partial_point_real_interval': decimal_bounds(point[0]),
            'partial_point_imaginary_interval': decimal_bounds(point[1]),
            'tail_upper_bound': str(tail),
            'axis_strict_lower_bound': str(axis_lower),
            'point_strict_modulus_upper_bound': str(point_upper),
            'gap_strict_lower_bound': str(axis_lower - point_upper)
        },
        'kummer': {
            'a': '1/2', 'b': '-3/2', 'point': '1/2+i*sqrt(2)/2',
            'polynomial_zero': True, 'real_polynomial_value': '2/3',
            'coefficient_identity_finite_checks': 101,
            'all_coefficient_identity': 'proved algebraically in note.tex',
            'earlier_local_witness': {'a': '1', 'b': '-3/2', 'modulus_squared_quadratic_coefficient': '-20/9'}
        },
        'analytic_coverage': 'The contour expansion, parameter continuity, and all-index Kummer identity are written proofs in note.tex.'
    }


if __name__ == '__main__':
    print(json.dumps(verify(), indent=2))
