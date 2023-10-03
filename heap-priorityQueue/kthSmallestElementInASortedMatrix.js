// leetcode 378

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



var kthSmallest = function(matrix, k) {
    const heap = new Heap();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            heap.add(matrix[i][j]);
        }
    }

    let result;

    while (k) {
        result = heap.pop();
        k--;
    }
    return result;
};


// kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8);
kthSmallest([[0,0,0],[2,7,9],[7,8,11]], 9);  // 8

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
