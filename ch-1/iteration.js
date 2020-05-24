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



const fibonacci = n => {
  // a is n-th term
  // b is (n-1)th term
  const fib_iter = (a, b, n) => n == 0 ? a : fib_iter(a + b, a, n - 1);
  return fib_iter(1, 0, n);
};

console.log(fibonacci(100));