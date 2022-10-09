/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    const seen = new Map();
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const diff = k - nums[i];
        
        if(!seen.has(diff)) {
            seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);
            continue;
        }
        seen.set(diff, seen.get(diff)-1);
        if(!seen.get(diff)) seen.delete(diff);
        count++;
    }
    return count;    
};