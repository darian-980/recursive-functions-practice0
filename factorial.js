function factorial(n) {
    if (n === 0) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }
}

function factorialWrapper(n) {
    if (n >= 0 && Number.isInteger(n)) {
        return factorial(n)
    } else {
        return undefined
    }
}


console.log(factorialWrapper(4))


// 0 = 1
// 2: 2 * 1 = 2
// 3: 3 * 2 * 1 = 6
// 4: 4 * 3 * 2 * 1 = 24