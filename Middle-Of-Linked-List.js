/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let middleNode = function (head) {
  let targetLen = Math.ceil(getLength(head) / 2);
  return returnAtPosition(head, targetLen);
};

let getLength = function (node) {
  let length = 0;
  while (node.next) {
    length += 1;
    node = node.next;
  }
  return length;
};

let returnAtPosition = function (node, targetLen) {
  for (let i = 0; i < targetLen; i++) {
    node = node.next;
  }
  return node;
};
