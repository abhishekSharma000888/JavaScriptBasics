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

const myObject = {
    values: [10, 20, 30],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.values.length) {
                    return {value: this.values[index++], done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};
 for (const value of myObject){
     console.log(value);
 }