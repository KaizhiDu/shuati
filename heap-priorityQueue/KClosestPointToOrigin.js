// leetcode 973
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
        return (this.heap[parentIdx] || {}).value;
    }

    getLeftChild(idx) {
        const parentIdx = this.getLeftChildIndex(idx);
        return (this.heap[parentIdx] || {}).value;
    }

    getRightChild(idx) {
        const parentIdx = this.getRightChildIndex(idx);
        return (this.heap[parentIdx] || {}).value;
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
            const { value: current } = this.heap[currentIdx] || {};
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
            const { value: current } = this.heap[currentIdx] || {};
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

    insert(item) {
        const [a, b] = item;
        const value = a * a + b * b;
        this.heap.push({ value, res: item });
        this.heapifyUp();
    }

    pop() {
        const popValue = this.heap[0];
        const last = this.heap.pop();
        this.heap[0] = last;
        this.heapifyDown();
        return (popValue || {}).res;
    }

}


const KClosestPointToOrigin = (points, k) => {
    const minHeap = new Heap();
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        minHeap.insert(point);
    }
    const result = [];
    while (k > 0) {
        const res = minHeap.pop();
        result.push(res);
        k--;
    }
    return result;
}


console.log(KClosestPointToOrigin([[3,3],[5,-1],[-2,4]], 2));

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
//
//
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
