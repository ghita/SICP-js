const cube = (x) =>
    x * x * x;

const reduction = (x) =>
    3 * x - 4 * cube(x);

const sine = (angle) =>
    (Math.abs(angle) < 0.001)
        ? angle
        : reduction(sine(angle / 3.0));

console.log(sine(100));