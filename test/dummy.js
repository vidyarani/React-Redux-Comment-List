function increment(num1, num2 = 1){
    console.log("In increment", num1, num2);
    // if(num2 == undefined) num2 = 1;
    return num1 + num2;
}

// console.log(increment(2));
var str = "are you doing today?";
var res = str.split('|');
var priority = res[0];
var comment = res[1];

if(comment == undefined){
    priority = 0;
     comment = res[0]
}
console.log('priority:', priority);
console.log('comment:', comment);

// function wrap(f) {
//     return function(num){
//         console.log("Before log: ");
//         var result = f(num);
//         console.log("After log: ", result);
//         return result;
//     }
// }

// var wrapped_increment = wrap(increment);

// console.log(wrapped_increment(9));

