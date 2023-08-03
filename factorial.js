function factorial(num) {
    let count = 1;
    for (let i = 1; i <=num; i++) {
        count = count * i;
        // console.log(i, count);
    }
    return count;
}

const ans = factorial(4);
console.log(ans);