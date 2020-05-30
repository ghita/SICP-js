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

    toString() {
        return `[${this.x ? this.x : "_"}, ${this.y ? this.y : "_"}]`;
    }

}

// constructor function
export function pair(x, y) {
    return Pair.of(x, y);
}

export function list(xs) {
    return xs.length === 0 ?
        Pair.empty() :
        (xs.length === 1) ?
            pair(xs[0], null) :
            pair(xs[0], list(xs.slice(1)));
}
