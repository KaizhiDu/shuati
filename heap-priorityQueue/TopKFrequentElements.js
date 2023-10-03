// leetcode 347
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
        return (this.heap[parentIdx] || {}).check;
    }

    getLeftChild(idx) {
        const leftChildIdx = this.getLeftChildIndex(idx);
        return (this.heap[leftChildIdx] || {}).check;
    }

    getRightChild(idx) {
        const rightChildIdx = this.getRightChildIndex(idx);
        return (this.heap[rightChildIdx] || {}).check;
    }

    switchNode(oneIdx, twoIdx) {
        const temp = this.heap[oneIdx];
        this.heap[oneIdx] = this.heap[twoIdx];
        this.heap[twoIdx] = temp;
    }

    // max
    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const current = this.heap[currentIdx].check;
            const parentIndex = this.getParentIndex(currentIdx);
            const parent = this.getParent(currentIdx);
            if (parent > current) {
                break;
            } else {
                this.switchNode(currentIdx, parentIndex);
            }
            currentIdx = parentIndex;
        }
    }

    // max
    heapifyDown() {
        let currentIdx = 0;
        while (this.getLeftChild(currentIdx)) {
            const current = this.heap[currentIdx].check;
            let maxChild = this.getLeftChild(currentIdx);
            let maxChildIdx = this.getLeftChildIndex(currentIdx);
            const rightChild = this.getRightChild(currentIdx);
            if (maxChild < rightChild) {
                maxChild = rightChild;
                maxChildIdx = this.getRightChildIndex(currentIdx);
            }
            if (current > maxChild) {
                break;
            } else {
                this.switchNode(currentIdx, maxChildIdx);
            }
            currentIdx = maxChildIdx;
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


const topKFrequent = (nums, k) => {
    const heap = new Heap();

    const summarySums = (nums || []).reduce((accum, item) => {
        if (accum[item]) {
            accum[item] = accum[item] + 1;
        } else {
            accum[item] = 1;
        }
        return accum;
    }, {});

    const finalSums = Object.keys(summarySums).map(key => {
        return {
            res: key,
            check: summarySums[key]
        }
    });

    console.log(finalSums);

    finalSums.forEach(item => {
        heap.insert(item);
    });

    const result = [];

    while (k > 0) {
        const res = heap.pop();
        result.push(res.res);
        k--;
    }

    return result;
}


// console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([-1,-1], 1));
