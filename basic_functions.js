const square = x => x * x;

const good_enough = (guess, x) => Math.abs(square(guess) - x) < 0.001;

const improve = (guess, x) => (guess + (x / guess)) / 2

const sqrt_iter = (guess, x) =>
    good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);

console.log(sqrt_iter(1, 0.4));