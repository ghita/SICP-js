import { pair, listIter, listRec, head, tail, log, length } from "./pair.js";

const generateArray = (count) => {
    return Array.from({ length: count }, (v, i) => i + 1);
}


export function nthel(n, xs) {
    return (n === 0) ?
        head(xs) :
        nthel(n - 1, tail(xs));
}

log(pair(1, 2));
log(listRec([]));
// log(listRec([1, 2]));
// log(listRec([1, 2, 3]));
// log(listRec([1, 2, 3, 4]));
// log(listIter(generateArray(1000))); // this blows !

const one_four = listIter([1, 2, 3, 4]);
log(head(one_four));
log(tail(one_four));
log(head(tail(one_four)));
log(nthel(3, one_four));
log(length(one_four));