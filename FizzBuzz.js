/**
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = function(n) {
let result = []
for (let init = 1; init <= n; init++){
if (init % 15 == 0){
result.push('FizzBuzz')
}else if(init % 3 == 0){
result.push('Fizz')
}else if (init % 5 == 0){
result.push('Buzz')
} else {
result.push(init.toString())
}
}
return result
};
