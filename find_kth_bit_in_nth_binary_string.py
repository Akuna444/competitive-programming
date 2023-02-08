class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        # base case
        if n == 1:
            return '0'
        # recursion - based on length of Nth binary string and k
        l = pow(2, n) - 1
        m = (l + 1) // 2
        if k == m:
            return '1'
        if k < m:
            return self.findKthBit(n - 1, k)
        else:
            return '1' if self.findKthBit(n - 1, m - (k - m)) == '0' else '0'
