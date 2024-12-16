// Typst problems for the game
const problems = [
    {
        "title": "Summation",
        "description": "Sum with limits",
        "typst": "sum_(i=1)^n i^2 = (n(n+1)(2n+1))/6",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Integration",
        "description": "Definite integral",
        "typst": "integral_0^(pi) sin(x) dif x = 2",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Euler's Identity",
        "description": "The most beautiful equation in mathematics",
        "typst": "e^(pi i) + 1 = 0",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Normal Distribution",
        "description": "The bell curve",
        "typst": "Phi(x) = 1/(sigma sqrt(2pi)) e^(-(x - mu)^2/(2sigma^2))",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Relativity",
        "description": "Einstein's famous equation",
        "typst": "E = m c^2",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Definition of Derivative",
        "description": "The fundamental concept of calculus",
        "typst": "(diff f)/(diff x) = lim_(h->0) (f(x + h) - f(x))/h",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Pythagorean Identity",
        "description": "Fundamental trigonometric identity",
        "typst": "sin^2(theta) + cos^2(theta) = 1",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Area of a Circle",
        "description": "Simple but fundamental",
        "typst": "A = pi r^2",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Law of Cosines",
        "description": "Generalization of Pythagorean theorem",
        "typst": "c^2 = a^2 + b^2 - 2a b cos(angle C)",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    },
    {
        "title": "Bayes' Theorem",
        "description": "Fundamental in probability",
        "typst": "P(A|B) = (P(B|A)P(A))/P(B)",
        "points": function() { return Math.ceil(this.typst.length / 10); }
    }
];
