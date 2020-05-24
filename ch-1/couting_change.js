
const denomination =
    (kinds_of_coins) => {
      return kinds_of_coins === 1 ?
          1 :
          kinds_of_coins === 2 ?
          5 :
          kinds_of_coins === 3 ?
          10 :
          kinds_of_coins === 4 ? 25 : kinds_of_coins === 5 ? 50 : 0;
    }

const cc =
    (amount, kinds_of_coins) => {
      return amount === 0 ?
          1 :
          amount < 0 || kinds_of_coins === 0 ? 0 :
                                               cc(amount, kinds_of_coins - 1) +
                  cc(amount - denomination(kinds_of_coins), kinds_of_coins);
    }

const count_change = (amount) => cc(amount, 5);
console.log(count_change(5))