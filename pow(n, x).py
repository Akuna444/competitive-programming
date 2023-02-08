class Solution:
    def myPow(self, x: float, n: int) -> float:
        
        if n == 0: return 1
        nege = False
        
        if n < 0: 
            nege = True
            n *= -1
        
        res = 1
        while n:
            if n % 2:
                res *= x
                n -= 1
            else:
                x *= x
                n = n//2
                
        if nege: return 1/res
        return res
