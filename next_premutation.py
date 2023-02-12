class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        L = len(nums)
        for i in reversed(range(L - 1)):
            # Search
            cand = -1
            for j in range(i + 1, L):
                if nums[j] > nums[i]:
                    if cand < 0 or nums[j] < nums[cand]: cand = j
            if cand < 0: continue

            # Swap
            nums[i], nums[cand] = nums[cand], nums[i]
                        
            # Insertion sort
            j = i + 2
            while j < L:
                k = j
                while k - 1 > i and nums[k - 1] > nums[k]:
                    nums[k - 1], nums[k] = nums[k], nums[k - 1]
                    k -= 1
                
                j += 1

            break
        else:
            nums.reverse()
