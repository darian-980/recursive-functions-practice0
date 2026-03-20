function pascal(size, index = 0, triangle = [1]) {
    if (index >= size) {
        // console.log("condition met", index);
        return triangle
    } else {
        triangle.push(0);
        triangle.unshift(0);
        let new_triangle = [];
        for (let i = 0; i < triangle.length - 1; i++) {
            new_triangle.push(triangle[i] + triangle[i + 1]);
            // console.log("new triangle i :",i,new_triangle)
        }
        return pascal(size, index + 1, new_triangle)
    }
}

console.log(pascal(5));