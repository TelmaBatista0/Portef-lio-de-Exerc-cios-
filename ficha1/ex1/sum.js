//Codigo da ficha function sum(a, b) { return a + b; } module.exports = sum; 

// sum.js (CÓDIGO ALTERADO)
function sum(a, b) {


    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (!isFinite(a) || !isFinite(b)) {
        return NaN;
    }
    return a + b;
}

module.exports = sum;