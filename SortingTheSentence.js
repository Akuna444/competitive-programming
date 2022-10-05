/**
 * @param {string} s
 * @return {string}
 */

const sortSentence = function(s) {
    
    let arr = []
    s.split(" ").forEach(s => {
         let lastNum = s.slice(-1)
         arr[lastNum] = s.slice(0, -1)
   })
    return arr.join(" ").trim()
   
};
