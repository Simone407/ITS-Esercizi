from my_project import Calculator


def test_addition():
    calculation: Calculator = Calculator(10,5)
    assert calculation.addition() == 13, 'the sum is wrong'


def test_substraction():
    calculation: Calculator = Calculator(10,5)
    assert calculation.substraction() == 5, 'the substraction is wrong'


def test_multiplication():
    calculation: Calculator = Calculator(10,5)
    assert calculation.multiplication() == 50, 'the sunm is wrong'


def test_division():
    calculation: Calculator = Calculator(10,5)
    assert calculation.division() == 2.00, 'the quotient is wrong'