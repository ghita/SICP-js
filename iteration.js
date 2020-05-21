// some general purpose
const conditional = (predicate, then_clause, else_clause) =>
    predicate ? then_clause : else_clause

const square = x => x * x;

const good_enough = (guess, x) => Math.abs(square(guess) - x) < 0.001;

const improve = (guess, x) => (guess + (x / guess)) / 2

const sqrt_iter = (guess, x) =>
    good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)


const sqrt = x => sqrt_iter(1, x);

console.log(sqrt(100));