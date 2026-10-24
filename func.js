
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");

function add(a,b){
return a + b;
}

let result = add(5,10);
console.log(result);

//anonymous function

const hello = function(){
return "Hi there";
}
console.log(hello);

//function Expression
const newAdd = function(c,d){
return c + d;
};
console.log(newAdd(7,3));