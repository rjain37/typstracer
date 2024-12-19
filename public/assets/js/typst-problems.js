// Typst problems for the game
const problems = [
    {
        "title": "Summation",
        "description": "Sum with limits",
        "typst": "sum_(i=1)^n i^2 = (n(n+1)(2n+1))/6"
    },
    {
        "title": "Integration",
        "description": "Definite integral",
        "typst": "integral_0^(pi) sin(x) dif x = 2"
    },
    {
        "title": "Euler's Identity",
        "description": "The most beautiful equation in mathematics",
        "typst": "e^(pi i) + 1 = 0"
    },
    {
        "title": "Normal Distribution",
        "description": "The bell curve",
        "typst": "Phi(x) = 1/(sigma sqrt(2pi)) e^(-(x - mu)^2/(2sigma^2))"
    },
    {
        "title": "Relativity",
        "description": "Einstein's famous equation",
        "typst": "E = m c^2"
    },
    {
        "title": "Definition of Derivative",
        "description": "The fundamental concept of calculus",
        "typst": "(diff f)/(diff x) = lim_(h->0) (f(x + h) - f(x))/h"
    },
    {
        "title": "Pythagorean Identity",
        "description": "Fundamental trigonometric identity",
        "typst": "sin^2(theta) + cos^2(theta) = 1"
    },
    {
        "title": "Area of a Circle",
        "description": "Simple but fundamental",
        "typst": "A = pi r^2"
    },
    {
        "title": "Law of Cosines",
        "description": "Generalization of Pythagorean theorem",
        "typst": "c^2 = a^2 + b^2 - 2a b cos(angle C)"
    },
    {
        "title": "Bayes' Theorem",
        "description": "Fundamental in probability",
        "typst": "P(A|B) = (P(B|A)P(A))/P(B)"
    },
    {
        "title": "AM-GM Inequality",
        "description": "Classic competition math",
        "typst": "frac(x_1 + x_2 + dots.c + x_n, n) >= root(n, x_1 dot x_2 dots x_n)"
    },
    {
        "title": "Cauchy Integral Formula",
        "description": "Integration for holomorphic functions",
        "typst": "f(a) = 1/(2pi i) integral.cont_C f(z)/(z - a) dif z"
    },
    {
        "title": "Portfolio Variance",
        "description": "Used to calculate covariance in a stock portfolio",
        "typst": "sigma_z^2 = (sum_(i=1)^n w_i^2 sigma_i^2) + 2(sum_(i=1)^(n-1) sum_(j=i+1)^n w_i w_j sigma_(i,j))"
    },
    {
        "title": "Spectral Decomposition",
        "description": "The eigenvalues and eigenvectors of a matrix",
        "typst": "A = mat(|,|,,| ;bold(v)_1, bold(v)_2, dots.c, bold(v)_n; |, |, , |) mat(lambda_1, , , ;, lambda_2, , ; , , dots.down, ;, , , lambda_n) mat(|,|,,| ;bold(v)_1, bold(v)_2, dots.c, bold(v)_n; |, |, , |)^(-1)"
    },
    {
        "title": "Stokes-Cartan",
        "description": "AKA Generalized Stokes",
        "typst": "integral_(partial Omega) omega = integral_Omega dif omega"
    },
    {
        "title": "Euler Maserchoni Constant",
        "description": "Macaroni",
        "typst": "gamma = lim_(n -> infinity) (sum_(k=1)^n 1/k - ln n) = integral_1^infinity (1/(floor(x)) - 1/x ) dif x"
    },
    {
        "title": "Fubini's Theorem",
        "description": "Swapping integrals",
        "typst": "integral_X ( integral_Y f(x,y) dif y) dif x = integral_Y ( integral_X f(x,y) dif x) dif y = integral_(X times Y) f(x,y) dif (x,y)" 
    },
    {
        "title": "Black Scholes",
        "description": "Option pricing",
        "typst": "frac(partial V, partial t)  + 1/2 sigma^2 S^2 frac(partial^2 V, partial t^2) + r S frac(partial V, partial t) - r V = 0"
    },
    {
        "title": "Tail of Binomial Distribution",
        "description": "Thank the lord for Chernoff bounds",
        "typst": "P(X >= k) = sum_(i=k)^n binom(n,i) p^i (1-p)^(n-i)"
    }
];
