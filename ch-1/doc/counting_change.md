### Counting number of ways to change a $amount

How many different ways can we make change of $1.00, given half-dollars, quarters, dimes, nickels, and pennies? More generally, can we write a function to compute the number of ways to change any given amount of money?

## *Solution*

A recursive solution follows. Think that we see the coins available as arranged in some order. then following holds. The total ways to change amount **a** using **n** kinds of coins equals:
 
- the number of ways to change amount a using all but first kind of coin, plus
- the number of ways to change amount a - d using all n coins types , where d is he denomination of the first  kind of coin.

Thus, we can recursively reduce the problem of changing a given amount to problems of changing smaller amounts or using fewer kinds of coins.

We must also consider this degenerate cases:

- if a == 0 => 1 way to make change
- if a < 0 => 0 way to make change
- if n == 0 => 0 way to make  change