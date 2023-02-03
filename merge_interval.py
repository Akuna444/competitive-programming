class Solution:
    def merge(self, intr: List[List[int]]) -> List[List[int]]:
        i=0
        intr.sort()
        if len(intr)==0:
            return []
        elif len(intr)==1:
            return list(intr)
        else:
            while i<len(intr)-1:
                if(intr[i][1]>=intr[i+1][0] and intr[i][1]>=intr[i+1][1]):
                    intr.append([intr[i][0],intr[i][1]])
                    intr.remove(intr[i])
                    intr.remove(intr[i])
                    intr.sort()

                elif(intr[i][1]>=intr[i+1][0] and intr[i][1]<intr[i+1][1]):
                    intr.append([intr[i][0],intr[i+1][1]])
                    intr.remove(intr[i])
                    intr.remove(intr[i])
                    intr.sort()
                else:
                    i+=1
            return intr
