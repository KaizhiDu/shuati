// leetcode 1438

class Heap {
    constructor() {
        this.heap = [];
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

    getNode(idx) {
        return this.heap[idx]
    }

    switchNode(oneIdx, twoIdx) {
        const temp = this.heap[oneIdx];
        this.heap[oneIdx] = this.heap[twoIdx];
        this.heap[twoIdx] = temp;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex) {
            const parentIdx = this.getParentIndex(currentIndex);
            const current = this.getNode(currentIndex);
            const parent = this.getNode(parentIdx);
            if (parent > current) {
                this.switchNode(currentIndex, parentIdx)
            } else {
                break;
            }
            currentIndex = parentIdx;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        console.log('before down', this.heap);
        while (this.getLeftChildIndex(currentIndex)) {
            const current = this.getNode(currentIndex);
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            const leftChild = this.getNode(leftChildIndex);
            const rightChild =  !isNaN(this.getNode(rightChildIndex)) ? this.getNode(rightChildIndex) : Infinity;
            const minChildIdx = leftChild < rightChild ? leftChildIndex: rightChildIndex;
            const minChild = leftChild < rightChild ? leftChild: rightChild;
            if (current > minChild) {
                this.switchNode(minChildIdx, currentIndex);
            } else {
                break;
            }
            currentIndex = minChildIdx;
        }
        console.log('after down', this.heap);
    }

    add(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    pop() {
        const res = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return res;
    }

}



var longestSubarray = function(nums, limit) {

};


longestSubarray([8,2,4,7], 4);  // 2


// Example 1:
// Input: nums = [8,2,4,7], limit = 4
// Output: 2
// Explanation: All subarrays are:
//     [8] with maximum absolute diff |8-8| = 0 <= 4.
//     [8,2] with maximum absolute diff |8-2| = 6 > 4.
//     [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
//     [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
//     [2] with maximum absolute diff |2-2| = 0 <= 4.
//     [2,4] with maximum absolute diff |2-4| = 2 <= 4.
//     [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
//     [4] with maximum absolute diff |4-4| = 0 <= 4.
//     [4,7] with maximum absolute diff |4-7| = 3 <= 4.
//     [7] with maximum absolute diff |7-7| = 0 <= 4.
// Therefore, the size of the longest subarray is 2.
