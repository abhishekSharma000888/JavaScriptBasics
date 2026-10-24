function outer(){
let outerVar = "out of scope";

function inner(){
console.log(outerVar);
}

return inner;
}
const closure = outer();

closure();
closure();

