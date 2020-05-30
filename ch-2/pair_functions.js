import { pair, listIter, listRec, log } from "./pair.js";

const generateArray = (count) => {
    return Array.from({ length: count }, (v, i) => i + 1);
}


log(pair(1, 2));
log(listRec([]));
log(listRec([1, 2]));
log(listRec([1, 2, 3]));
log(listRec([1, 2, 3, 4]));
log(listIter(generateArray(1000))); // this blows !