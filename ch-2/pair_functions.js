import { pair, list, log } from "./pair.js";

const generateArray = (count) => {
    return Array.from({ length: count }, (v, i) => i + 1);
}


//log(generateArray(100));
// log(pair(1, 2));
// log(list([]));
// log(list([1, 2]));
// log(list([1, 2, 3]));
// log(list([1, 2, 3, 4]));
log(list(generateArray(100))); 