import { pair, listIter, listRec, head, tail, log } from "./pair.js";

const generateArray = (count) => {
    return Array.from({ length: count }, (v, i) => i + 1);
}


log(pair(1, 2));
log(listRec([]));
// log(listRec([1, 2]));
// log(listRec([1, 2, 3]));
// log(listRec([1, 2, 3, 4]));
// log(listIter(generateArray(1000))); // this blows !

log(head(listIter([1, 2, 3])));
log(tail(listIter([1, 2, 3])));