const odex = require('odex');
const solver = new odex.Solver(3);

// beta = transmission rate
// gamma = recovery rate

const beta = 1.4247
const gamma = 0.14286
const TS = 1.0
const ND = 70.0
const S0 = 1 - 1e-6
const I0 = 1e-6

const SIR = (gamma, beta, N) => (x, y) => ([
    (-beta * y[0] * y[1]) / N,
    (beta * y[0] * y[1]) / N - gamma * y[1],
    gamma * y[1]
]);

const res = [];

const start = Date.now();
const end = start + 1000;
let count = 0;

console.log(solver.absoluteTolerance);
console.log(solver.relativeTolerance);

while (Date.now() < end) {
    solver.solve(
        SIR(gamma, beta, 13000),
        0,
        [10000, 3000, 0],
        1
    );
    count++;
}
console.log(count / 525);
