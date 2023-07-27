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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;

// const sumList = function(head) {
//     let result = 0;
//     while(head !== null) {
//         result = result + head.val;
//         head = head.next;
//     }
//     return result;
// };

const sumList = function(head) {
    if (!head) return 0;
    return head.val + sumList(head.next);
};


const result = sumList(a);


console.log(result);


