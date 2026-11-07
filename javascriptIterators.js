const numbers = [1,2,3];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const array = ['a','b','c'];
const it = array[Symbol.iterator]()
for(let value of it){
    console.log(value)
}