//   incremental 
//   let sum = 0;
//   for( var i = 1; i <= 6; i++){
//     sum = sum + i;

// }
//console.log(sum);

//decremental
//   let sum = 0;
//   for( var i = 6; i >= 1; i--){
//     sum = sum + i;

// }
// console.log(sum);
function sum(i){
        if( i == 1){
            return 1;
        }
    return sum(i - 1) + i;
}
console.log(sum(6));