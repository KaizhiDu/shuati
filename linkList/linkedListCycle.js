// leetcode 141

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

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

const hasCycle = function(head) {
    const hashSet = new Set();
    let result = false;
    while (head !== null) {
        if (hashSet.has(head)) {
            result = true;
            break;
        }
        hashSet.add(head);
        head = head.next;
    }
    return result;
};

const result = hasCycle(a);


console.log(JSON.stringify(result, null, 2));


