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

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');
const f = new ListNode('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// const reverseList = function(head) {
//   let prev = null;
//   while(head !== null) {
//       const next = head.next;
//       head.next = prev;
//       prev = head;
//       head = next;
//   }
//   return prev;
// };
const reverseList = function(head, prev = null) {
    if (head === null) {
        return prev;
    }
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
};

const result = reverseList(a);


console.log(JSON.stringify(result, null, 2));


