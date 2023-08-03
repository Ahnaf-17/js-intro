function sum(num){
    // console.log(num)
    let count = 0;
    for(let i=0;i<num.length;i++){
        const index = i;
        const value = num[index];
        count = count+value;
        console.log(index, value, count);
    }
    // return count;
}

const numbers = [13,24,12,17,11,22];
sum(numbers);