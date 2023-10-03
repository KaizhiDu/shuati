// leetcode 1086


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



const highFive = (items) => {
    const students = [];
    for (let i = 0; i < items.length; i++) {
        const [id, score] = items[i];
        const exist = students.find(student => student.id === id);
        if (exist) {
            exist.scores.push(score);
        } else {
            students.push({
                id,
                scores: [score]
            })
        }
    }

    const results = [];

    for (let i = 0; i < students.length; i++) {
        const heap = new Heap();
        const { scores, id } = students[i];
        for (let j = 0; j < scores.length; j++) {
            heap.insert(scores[j]);
        }
        let k = 5;
        let sum = 0;
        while (k > 0) {
            const pop = heap.pop();
            sum = sum + pop || 0;
            k--;
        }
        results.push([id, Math.floor(sum/5)])
    }
    return results;
}


// console.log(highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]));
console.log(highFive([[1,46],[1,93],[1,94],[1,36],[1,71],[2,4],[2,68],[2,63],[2,80],[2,27],[3,79],[3,35],[3,95],[3,56],[3,35],[4,31],[4,32],[4,82],[4,42],[4,97]]

));


// Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
// The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.
