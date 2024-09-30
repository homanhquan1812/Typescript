function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a, " ").concat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new Error('Both a and b are not the same type.');
    }
}
console.log(sum(3, 'Quan'));
