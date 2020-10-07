/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/* solution with linear space and time complexities */
var rotateRight = function (head, k) {
  //if there is no head provided, return head
  if (!head) return head;
  //declare an empty array to store objects from linked list
  let array = [];
  //set currentNode as head to preserve alterating head directly
  let currentNode = head;
  //while currentNode exists, push currentNode to array
  //and set currentNode equal to currentNode.next
  while (currentNode) {
    array.push(currentNode);
    currentNode = currentNode.next;
  }
  //if k%array.length is zero, return head
  if (k % array.length === 0) {
    return head;
  }
  //find "pointer value" by subtracting k%array.length from array.length
  const pointer = array.length - (k % array.length);
  //set head equal to array at index equal to pointer value
  head = array[pointer];
  //reassign the next "value" in last object of the array to the object at array of zero
  array[array.length - 1].next = array[0];
  //reassign the next "value" for array object at position pointer-1 to null
  array[pointer - 1].next = null;
  //return the updated head
  return head;
};
