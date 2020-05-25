
const exptRec = (b, n) =>
    (n === 0)
        ? 1
        : b * exptRec(b, n - 1);

const exptIter = (b, n) => {
    const iter = (acc, n) =>
        n === 0 ? acc : exptIter(acc * b, n - 1);

    return iter(1, n);
}

const mod = (n, d) => n % d;
const isEven = (n) => mod(n, 2) == 0;

const expt = (b, n) => n === 0
    ? 1
    : isEven(n)
        ? Math.pow(expt(b, n / 2), 2)
        : b * expt(b, n - 1);

console.log(expt(2, 4));