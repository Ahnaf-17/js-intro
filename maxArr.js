function maxArray(num){
    let max = num[0];
    for(let i = 0;i<num.length;i++){
        const index = i;
        const value = num[index];
        if(value>max){
            max = value;
        }
    }
    return max;
}
const height = [120,136,152,190,200];
const ans = maxArray(height);
console.log(ans);