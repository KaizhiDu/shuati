// leetcode 88


class Heap {
    constructor() {
        this.heap = []
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftChildIndex(idx) {
        return idx * 2 + 1;
    }

    getRightChildIndex(idx) {
        return idx * 2 + 2;
    }

    getParent(idx) {
        const parentIdx = this.getParentIndex(idx);
        return this.heap[parentIdx];
    }

    getLeftChild(idx) {
        const leftChildIdx = this.getLeftChildIndex(idx);
        return this.heap[leftChildIdx];
    }

    getRightChild(idx) {
        const rightChildIdx = this.getRightChildIndex(idx);
        return this.heap[rightChildIdx];
    }

    switchNode(oneIdx, twoIdx) {
        const temp = this.heap[oneIdx];
        this.heap[oneIdx] = this.heap[twoIdx];
        this.heap[twoIdx] = temp;
    }

    // min
    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const current = this.heap[currentIdx];
            const parentIndex = this.getParentIndex(currentIdx);
            const parent = this.getParent(currentIdx);
            if (parent < current) {
                break;
            } else {
                this.switchNode(currentIdx, parentIndex);
            }
            currentIdx = parentIndex;
        }
    }

    // min
    heapifyDown() {
        let currentIdx = 0;
        while (this.getLeftChild(currentIdx)) {
            const current = this.heap[currentIdx];
            let minChild = this.getLeftChild(currentIdx);
            let minChildIdx = this.getLeftChildIndex(currentIdx);
            const rightChild = this.getRightChild(currentIdx) || Infinity;
            if (minChild > rightChild) {
                minChild = rightChild;
                minChildIdx = this.getRightChildIndex(currentIdx);
            }
            if (current < minChild) {
                break;
            } else {
                this.switchNode(currentIdx, minChildIdx);
            }
            currentIdx = minChildIdx;
        }
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        const popValue = this.heap[0];
        const last = this.heap.pop();
        this.heap[0] = last;
        this.heapifyDown();
        return popValue;
    }

}



const merge = function(nums1, m, nums2, n) {
    const heap = new Heap();
    for (let i = 0; i < nums1.length; i++) {
        if (i < m) {
            heap.insert(nums1[i]);
        } else {
            break;
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (i < n) {
            heap.insert(nums2[i]);
        } else {
            break;
        }
    }

    let k = m + n;

    const result = [];

    while (k) {
        const pop = heap.pop();
        result.push(pop);
        k--;
    }
    return result;
};


// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([0], 0, [1], 1));


// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//     The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
