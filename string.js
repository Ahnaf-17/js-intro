const text = 'this is Mr Joker, from gotham city. I will create such a city where no violation will exist.'


// case sensitive 
const find = text.includes('joker');
console.log(find);

const lowerText = text.toLowerCase();
const search = lowerText.includes('joker');
console.log(search);

// index

console.log(text.indexOf('Joker'));

