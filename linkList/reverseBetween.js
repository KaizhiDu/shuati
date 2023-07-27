// leetcode 92

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
const e = new ListNode(5);
const f = new ListNode(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// e.next = f;


const reverseList = (node, prev = null) => {
    if (node === null) return prev;
    const next = node.next;
    node.next = prev;
    return reverseList(next, node);
}

const reverseBetween = function(head, left, right) {
    let header = new ListNode('laoduxiangzhidao');
    header.next = head;

    let count = 0;

    let needToReverse = null;

    let current = header;

    while (current !== null) {
        if (count + 1 === left) {
            needToReverse = current.next
            current.next = null;
        }
        count = count + 1;
        current = current.next;
    }

    let current2 = needToReverse;

    let tail = null;

    while (current2 !== null) {
        if (count === right) {
            tail = current2.next ? current2.next : null;
            current2.next = null;
        }
        count = count + 1;
        current2 = current2.next;
    }

    const afterReverse = reverseList(needToReverse);
    // console.log(JSON.stringify(header, null, 2));
    // console.log(JSON.stringify(afterReverse, null, 2));
    // console.log(JSON.stringify(tail, null, 2));

    let pointer = header;

    while (pointer.next !== null) {
        pointer = pointer.next;
    }
    pointer.next = afterReverse;

    while (pointer.next !== null) {
        pointer = pointer.next;
    }
    pointer.next = tail;
    return header.next;
};

const res = reverseBetween(a, 2, 4);


console.log(JSON.stringify(res, null, 2));


