# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        point = ListNode(0)
        out = point
        while l1 or l2:
            if l1: out.val += l1.val
            if l2: out.val += l2.val
            temp = out.val // 10
            out.val %= 10
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            if (temp != 0) or l1 or l2:
                out.next = ListNode(temp)
                out = out.next
        return point
