// object 

var pc = {
    processor : "core i5",
    ram : "ocpc",
    mb : 450,
    gpu : 3050
}

// console.log(pc.gpu);

// var all = Object.keys(pc);
// console.log(all);

var allValue = Object.values(pc);
// console.log(all);

// object loop 

var all = Object.keys(pc);
// console.log(all);

for (var i=0; i<all.length; i++){
    // console.log(all[i]);
    var Name = all[i];
    var value = pc[Name];
    console.log(Name,value);
}

console.log("//////////");
console.log("");

// for in 

for(var Name in pc){
    var value = pc[Name]
    console.log(Name,value)
}