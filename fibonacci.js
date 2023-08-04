const fibonacci = [0,1];
for(let i = 2;i<=10;i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);

var a=2; 
var b=3; 
if(a<b){
	console.log('Hello');
}
function add(a, b){ 
	return a + b;
}
console.log(add(1,2));