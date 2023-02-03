class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        num_array = []
        for i in nums:
            sum = 0
            for j in nums:
                if i > j:
                    sum += 1
            num_array.append(sum) 
        return num_array    
