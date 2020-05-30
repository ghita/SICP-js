import { pair, listIter, listRec, head, tail, length, is_null, log } from "./pair.js";

const generateArray = (count) => {
    return Array.from({ length: count }, (v, i) => i + 1);
}


export function nthel(n, xs) {
    return (n === 0) ?
        head(xs) :
        nthel(n - 1, tail(xs));
}

export function append(xs1, xs2) {
    return is_null(xs1)
        ? xs2
        : pair(head(xs1), append(tail(xs1), xs2));
}

// A function brooks(plus_curried, list(3, 4)) that applies arguments form segond list to the first curried function
function brooks(f, xs) {
    return is_null(xs) ? f :
        brooks(f(head(xs)), tail(xs));
}


log(pair(1, 2));
log(listRec([]));
// log(listRec([1, 2]));
// log(listRec([1, 2, 3]));
// log(listRec([1, 2, 3, 4]));
// log(listIter(generateArray(1000))); // this blows !

const one_four = listIter([1, 2, 3, 4]); /*?+*/
const five_eight = listIter([5, 6, 7, 8]);
log(head(one_four));
log(tail(one_four));
log(head(tail(one_four)));
log(nthel(3, one_four));
log(length(one_four));
log(append(one_four, five_eight));

const plus_curried = x => y => x + y;
console.log(brooks(plus_curried, listIter([1, 2])));