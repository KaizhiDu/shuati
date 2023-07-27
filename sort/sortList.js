// leetcode 148

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

const a = new ListNode(2);
const b = new ListNode(6);
const c = new ListNode(34);
const d = new ListNode(1);
const e = new ListNode(4);
const f = new ListNode(22);
const g = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const sortList = function(head) {

    if (!head.next) {
        return head;
    }

    // 快慢指针  先分开2个 list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    fast = slow.next;
    slow.next = null;

    console.log(JSON.stringify(head, null, 2));
    console.log(JSON.stringify(fast, null, 2));

    // merge left 和 right
    const header = new ListNode(0);
    return merge(sortList(head), sortList(fast), header);
};

const merge = (left, right, head) => {
    let current = head;
     while(left !== null && right !== null) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
            current = current.next;
        } else {
            current.next = right;
            right = right.next;
            current = current.next;
        }
     }
     if (left === null) {
         current.next = right;
     } else {
         current.next = left;
     }
     return head.next;
}




const result = sortList(a);


console.log(JSON.stringify(result, null, 2));


