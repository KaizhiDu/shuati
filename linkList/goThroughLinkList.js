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

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");

a.next = b;
b.next = c;
c.next = d;

const goThroughLinkList = function(head) {
    const result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
};


const result = goThroughLinkList(a);


console.log(result);


