// function shiftArray(array) {
//     array.unshift(array[array.length - 1]);
//     array.splice(array.length - 1, 1);
//     return array
//     // console.log(array);
// }

function permutations(passedArray, index = 0, results = []) {
    if (index === passedArray.length) {
        results.push([...passedArray]);
        return results;
    }
    for (let i = index; i < passedArray.length; i++) {
        [passedArray[index], passedArray[i]] = [passedArray[i], passedArray[index]];
        permutations(passedArray, index + 1, results);
        [passedArray[index], passedArray[i]] = [passedArray[i], passedArray[index]];
    }
    return results;
};









// permutations([1, 2, 3]); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// // An empty set has a single permutation, 0! = 1
// permutations([]); // [[]]


// permutations([1, 2]); // [[1,2],[2,1]]

console.log(permutations([1, 2, 3, 4])); //[[1,2,3,4],[1,2,4,3],[1,3,4,2],[1,3,2,4],[1,4,2,3],[1,4,3,2]] x6 (24 combos)


//1, 2, 6, 24

//1 * 2 = 2
//2 * 3 = 6
//6 * 4 = 24
//24 * 5 = 120



// function shiftArray(array) {
//     array.unshift(array[array.length - 1]);
//     array.splice(array.length - 1, 1);
//     return array
//     // console.log(array);
// }

// function permutations(passedArray, index = 0) {
//     let addedArray = [];
//     if (index === passedArray.length) {
//         // return addedArray;
//     } else {
//         // const og_array = passedArray.map((x) => x);
//         // addedArray.push(og_array);
//         // const arrayDupe = shiftArray(passedArray)
//         // addedArray.push(arrayDupe)
//         // console.log(addedArray)
//         let counter = 0;
//         let arrayCheck = passedArray.map((x) => x);
//         console.log(arrayCheck);
//         while (!(addedArray.some(existing => JSON.stringify(existing) === JSON.stringify(arrayCheck))) && counter < 4) {
//             const indexValue = passedArray[index];
//             passedArray.splice(index, 1);
//             shiftArray(passedArray);
//             passedArray.unshift(indexValue)
//             let arrayDupe = passedArray.map((x) => x);
//             console.log(arrayDupe)
//             addedArray.push(arrayDupe);
//             console.log(addedArray)
//             counter += 1
//             console.log()
//         }
//         permutations(passedArray, index + 1)
//     }
//     return addedArray;


// };