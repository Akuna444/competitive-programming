/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const syntaxMap = {
        '(':')',
        '[':']',
        '{':'}'
    }
    
    for(let i=0; i<s.length; i++){
        if(syntaxMap[s[i]]){
            stack.push(syntaxMap[s[i]]);
        } else if(stack[stack.length-1] === s[i]){
            stack.pop();
        } else {
            return false;
        }
    }
        
    return stack.length ? false : true;
};
