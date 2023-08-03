function sum(num){
    // console.log(num)
    let count = 0;
    for(let i=0;i<num.length;i++){
        const index = i;
        const value = num[index];
        count = count+value;
        // console.log(index, value, count);
    }
     return count;
}



function oddNumber(num){
    let count2 = [];
    for(let i=0;i<num.length;i++){
        const index2 = i;
        const value2 = num[index2];
        if(value2%2 !==0){
            // console.log(index2,value2,count2);
            count2.push(value2);
        }

    }
    return count2;
}

const numbers = [13,24,12,17,11,22];
// sum(numbers);
var odd = oddNumber(numbers);
console.log(odd);
const sumOfOdd = sum(odd);
console.log(sumOfOdd);


