/**
 * 
 * REVERSE A SINGLY LINKED LIST
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
 */

const reverseList = (head) => {
  if (this.next === null) {
    //update this.next.next = this.value
    this.next.next = this.value;
    //update this.next to equal null
    this.next = null;
  }

  if (this.next) return reverseList(this.next)
    
};