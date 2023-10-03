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

    // // min
    // heapifyUp() {
    //     let currentIdx = this.heap.length - 1;
    //     while (currentIdx > 0) {
    //         const current = this.heap[currentIdx];
    //         const parentIndex = this.getParentIndex(currentIdx);
    //         const parent = this.getParent(currentIdx);
    //         if (parent < current) {
    //             break;
    //         } else {
    //             this.switchNode(currentIdx, parentIndex);
    //         }
    //         currentIdx = parentIndex;
    //     }
    // }

    // max
    heapifyUp() {
        let currentIdx = this.heap.length - 1;
        while (currentIdx > 0) {
            const current = this.heap[currentIdx];
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

    // // min
    // heapifyDown() {
    //     let currentIdx = 0;
    //     while (this.getLeftChild(currentIdx)) {
    //         const current = this.heap[currentIdx];
    //         let minChild = this.getLeftChild(currentIdx);
    //         let minChildIdx = this.getLeftChildIndex(currentIdx);
    //         const rightChild = this.getRightChild(currentIdx) || Infinity;
    //         if (minChild > rightChild) {
    //             minChild = rightChild;
    //             minChildIdx = this.getRightChildIndex(currentIdx);
    //         }
    //         if (current < minChild) {
    //             break;
    //         } else {
    //             this.switchNode(currentIdx, minChildIdx);
    //         }
    //         currentIdx = minChildIdx;
    //     }
    // }

   // max
    heapifyDown() {
        let currentIdx = 0;
        while (this.getLeftChild(currentIdx)) {
            const current = this.heap[currentIdx];
            let maxChild = this.getLeftChild(currentIdx);
            let maxChildIdx = this.getLeftChildIndex(currentIdx);
            const rightChild = this.getRightChild(currentIdx) || Infinity;
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

const heap = new Heap();
heap.insert(10);
heap.insert(5);
heap.insert(2);
heap.insert(20);
heap.insert(19);
heap.insert(1);


console.log(heap.heap);
console.log(heap.pop());
console.log('after pop');
console.log(heap.heap);
console.log(heap.pop());
console.log('after pop');
console.log(heap.heap);
console.log(heap.pop());
console.log('after pop');
console.log(heap.heap);
