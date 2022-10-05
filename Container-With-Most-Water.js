/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = function(height) {

//only two container required
let first=0;
let last = height.length-1;
let area=0
while(first<last){

    let a= height[first]>height[last]?height[last]:height[first];
    area = Math.max(a*(last-first),area);
     height[first]<height[last]?first++:last--;
    
}
return area
};
