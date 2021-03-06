export const log = x => { console.log(x.toString()); }

class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static of(x, y) {
        return new Pair(x, y);
    }

    static empty() {
        return new Pair(null, null);
    }

    is_null() {
        return this.x === null && this.y === null;
    }

    toString() {
        return `[${this.x ? this.x : "_"}, ${this.y ? this.y : "_"}]`;
    }

}

// constructor function
export function pair(x, y) {
    return Pair.of(x, y);
}

export function head(xs) {
    return xs.x;
}

export function tail(xs) {
    return xs.y;
}

/**
 * @param {Pair} xs 
 */
export function is_null(xs) {
    return xs.is_null();
}

/**
 * @param {List} xs 
 */
export function length(xs) {
    function length_iter(xs, count) {
        return is_null(xs)
            ? count
            : length_iter(tail(xs), count + 1);
    }
    return length_iter(xs, 0);
}

// listRec::[xs] -> List[xs]
export function listRec(xs) {
    return xs.length === 0 ?
        Pair.empty() :
        (xs.length === 1) ?
            pair(xs[0], null) :
            pair(xs[0], listRec(xs.slice(1)));
}

// listIter::[xs] -> List[xs]
export function listIter(xs) {
    const construct = (list, index) => {
        return (index === 0) ?
            pair(xs[index], list) :
            construct(pair(xs[index], list), index - 1);
    }

    return construct(Pair.empty(), xs.length - 1);
}

