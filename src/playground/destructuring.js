console.log('array destructuring');
// Object Destructuring


// const person = {
//     name: 'Andrew',
//     age: 26,
//     location : {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const {name: firstName = 'Anonymous',age} = person;

// console.log (`${firstName} is ${age}`);

// const {city,temp: temperature} = person.location;
// if(city && temperature ){
//     console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;


// console.log(`Publisher Name is : ${publisherName}`)

// Array Destructuring

// const address = ['9 Hewitt Avenue', , 'Melbourne', '3001'];
// const [, suburb = 'Toorak', city  ] = address;
// console.log (`You are in ${suburb} , ${city} `);


const item  = ['coffee', '3', '4', '5'];

const [itemName, ,mediumCost]=item;

console.log (`A medium ${itemName} cost ${mediumCost} AUD`);

