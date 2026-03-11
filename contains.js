function contains(nest, word) {
    const valueArray = Object.values(nest);
    if (valueArray.includes(word)) {
        return true
    } else {
        for (let subdep of valueArray) {
            if (contains(subdep, word)) {
                return true
            }
        }
    }
}

// if (['bar'].includes('bar')){
//     console.log(true)
// }


// console.log(contains({ bar: "bar" }, "bar"))
// contains({ foo: "foo" }, "bar") // false
console.log(contains({ foo: { bar: "bar" } }, "bar")) // true