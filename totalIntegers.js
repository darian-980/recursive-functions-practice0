
// let totalCount = 0;

function totalIntegers(nest) {
    const arrayNest = Object.values(nest)
    // console.log(arrayNest)
    let totalCount = 0;
    totalCount += (arrayNest.reduce((prev, current) => { //reduce to iterate through array and +1 to totalCount if the value is an integer
        if (Number.isInteger(current)) {
            return prev + 1;
        } else {
            return prev;
        }
    }, 0))
    for (let subdep of arrayNest) {
        if (subdep === undefined || subdep.length === 0 || Array.isArray(subdep) === false && typeof subdep !== 'object') { //if subdep is undefined, array has length 0, if value is not array AND not an object
            // console.log("empty",subdep)
        }
        else {
            totalCount += totalIntegers(subdep);
            // console.log("values", Object.values(subdep))
        }
    }
    return totalCount;
}




// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
// totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4

// testsub([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])

// console.log(Object.values(['foo']))

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // returns 7

console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4)


// let totalCount = 0;

// function totalIntegers(nest) {
//     const arrayNest = Object.values(nest)
//     // console.log(arrayNest)
//     totalCount += (arrayNest.reduce((prev, current) => {
//         if (Number.isInteger(current)) {
//             return prev + 1;
//         } else {
//             return prev;
//         }
//     }, 0))
//     for (let subdep of arrayNest) {
//         if (subdep === undefined || subdep.length === 0 || Array.isArray(subdep) === false && typeof subdep !== 'object') {
//             // console.log("empty",subdep)
//         }
//         else {
//             totalIntegers(subdep);
//             // console.log("values", Object.values(subdep))
//         }

//     }
//     return totalCount;
// }