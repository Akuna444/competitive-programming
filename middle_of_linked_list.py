class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        count = 0
        tmp = head
        while tmp:
            count+=1
            tmp = tmp.next
            
        middle = count//2
        l = 0
        while l < middle:
            head = head.next
            l+=1
        return head
