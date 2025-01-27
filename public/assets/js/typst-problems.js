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
    },
    {
        "title": "Handshake Lemma",
        "description": "I bet you're fun at parties",
        "typst": "sum_(v in V) deg(v) = 2|E|"
    },
    {
        "title": "Analytic Radius of Convergence",
        "description": "The radius for where a power series converges in normed vector spaces",
        "typst": "R(f) = ( limsup_(n -> infinity) norm(T_n)^(1 slash n)_(cal(L)^n))^(-1)"
    },
    {
        "title": "Convolution Integral",
        "description": "Definition of convolution for continuous functions.",
        "typst": "x(t) * h(t) = integral_(-oo)^oo x(tau) h(t-tau) dif tau"
    },
    {
        "title": "Class Equation",
        "description": "As seen in group theory (corollary of orbit-stabilizer)",
        "typst": "abs(G) = abs(Z(G)) + sum_(i=1)^n abs(G : C_G (g_i))"
    },
    {
        "title": "Orbit-Stabilizer",
        "description": "The orbit-stabilizer relation for a group acting on a set.",
        "typst": "abs(Orb(x)) = [G : Stab(x)]"
    },
    {
        "title": "Millin Series",
        "description": "Sum of inverse fibonaccis at power 2 indices",
        "typst": "sum_(n=0)^infinity 1/(F_(2^n)) = (7-sqrt(5))/2"
    },
    {
        "title": "Isomorphism of C",
        "description": "Isomorphism between complex numbers and real polynomials",
        "typst": "CC approx (RR[x])/(x^2 + 1)"
    },
    {
        "title": "Monte Carlo Integration",
        "description": "The foundational equation of Monte Carlo Integration",
        "typst": "integral_Omega f dif x = lim_(N -> oo) 1/N sum_(i=1)^N f(X_i)"
    },
    {
        "title": "Noether Current",
        "description": "The current representing changes in a field over time",
        "typst": "j^(a mu) = ((diff cal(L))/(diff (diff_mu phi^i)) diff_nu phi^i - cal(L) delta_nu^mu) (diff x^nu)/(diff omega_a) |_(omega=0) - (diff cal(L))/(diff (diff_mu phi^i)) F_a^i (phi)"
    },
    {
        "title": "Markov Chain Mixing Time",
        "description": "An upper bound for the mixing time of a Markov Chain",
        "typst": "t_\"mix\" (epsilon) <= N ceil(ln(epsilon)/ln(1 - delta))"
    },
    {
        "title": "Frobenius Norm",
        "description": "One possible norm of a matrix",
        "typst": "norm(A)_F = tr(A A^T) = sqrt(sigma_1^2 + ... + sigma_r^2)"
    },
    {
        "title": "Atomic Form Factor",
        "description": "The scattering strength contribution of a specific point in a lattice",
        "typst": "f(bold(K)) = -integral dif bold(r) e^(i bold(K) dot bold(r)) rho(bold(r))"
    },
    {
        "title": "Reciprocal Lattice Vectors",
        "description": "A formula for calculating the first reciprocal lattice vector from primitive lattice vectors in 3D",
        "typst": "bold(b)_1 = 2pi (bold(a)_1 times bold(a)_2)/(bold(a)_1 dot (bold(a)_2 times bold(a)_3))"
    }
,
    {
    "title": "Variation of Parameters",
    "description": "The general form for inhomogeneous second order differential equation solutions",
    "typst": "u_1 = -integral (y_2 f(x))/W(y_1, y_2) dif x"
},
    {
    "title": "Ito's Formula",
    "description": "The evolution in a random variable for a vector drift equation with stochastic noise",
    "typst": "dif Y_t = ((diff f)/(diff t) + omega dot nabla f + 1/2 alpha^2 nabla^2 f) dif t + alpha nabla f dot dif W_t"
},
    {
    "title": "Sommerfeld Expansion",
    "description": "A common expansion for integrals involving the Fermi occupation function",
    "typst": "integral_(-oo)^oo dif E H(E) n_F (E) = integral_(-oo)^mu dif E H(E) + pi^2/6 (k_B T)^2 H'(mu) + cal(O)((k_B T)^4)"
}];
