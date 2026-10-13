 let s = "123";
 let n = Number(s);
 console.log(n);

 //converting Number to String

 let k = 123;
 let p = String(k);
 console.log(p);

 let bool = true;
 let a= 10;
 let res = bool + a;
 console.log(res);

 let z = "";
 if (z) {
     console.log("This won't print");  // Empty string is falsy
 } else {
     console.log("This will print");  // Empty string is coerced to false
 }