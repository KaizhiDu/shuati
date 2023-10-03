// leetcode 692


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
        return this.heap[parentIdx] || {};
    }

    getLeftChild(idx) {
        const leftChildIdx = this.getLeftChildIndex(idx);
        return this.heap[leftChildIdx] || {};
    }

    getRightChild(idx) {
        const rightChildIdx = this.getRightChildIndex(idx);
        return this.heap[rightChildIdx] || {};
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
            const current = this.heap[currentIdx].count;
            const parentIndex = this.getParentIndex(currentIdx);
            const parent = this.getParent(currentIdx).count;
            if (parent === current) {
                const currentName = this.heap[currentIdx].name;
                if (currentName < this.getParent(currentIdx).name) {
                   this.switchNode(currentIdx, parentIndex);
                }
            } else if (parent > current) {
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
            const current = this.heap[currentIdx].count;
            let maxChild = this.getLeftChild(currentIdx);
            let maxChildIdx = this.getLeftChildIndex(currentIdx);
            const rightChild = this.getRightChild(currentIdx);
            if (maxChild.count < rightChild.count) {
                maxChild = rightChild;
                maxChildIdx = this.getRightChildIndex(currentIdx);
            }
            if (maxChild.count === rightChild.count && maxChild.name > rightChild.name) {
                maxChild = rightChild;
                maxChildIdx = this.getRightChildIndex(currentIdx);
            }
            if (!maxChild.count) {
                break;
            }
            if (current > maxChild.count || 0) {
                break;
            } else if (current === maxChild.count) {
                const currentName = this.heap[currentIdx].name;
                if (currentName > maxChild.name) {
                    this.switchNode(currentIdx, maxChildIdx);
                }
            }  else {
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



var topKFrequent = function(words, k) {

    const sortWords = (words || []).reduce((accum, item) => {
    const exist = accum.find(acc => acc.name === item);
    if (exist) {
        exist.count = exist.count + 1;
    } else {
        accum.push({
            count: 1,
            name: item
        });
    }
    return accum;
}, []);

    const heap = new Heap();

    for (let i = 0; i < sortWords.length; i++) {
        const current = sortWords[i];
        heap.insert(current);
    }

    console.log('origin', JSON.stringify(heap, null, 2));

    const result = [];

    while (k > 0) {
        const laodu = heap.pop();
        result.push(laodu.name);
        k--;
    }

    return result;
};


// console.log(topKFrequent(["glarko","zlfiwwb","nsfspyox","pwqvwmlgri","qggx","qrkgmliewc","zskaqzwo","zskaqzwo","ijy","htpvnmozay","jqrlad","ccjel","qrkgmliewc","qkjzgws","fqizrrnmif","jqrlad","nbuorw","qrkgmliewc","htpvnmozay","nftk","glarko","hdemkfr","axyak","hdemkfr","nsfspyox","nsfspyox","qrkgmliewc","nftk","nftk","ccjel","qrkgmliewc","ocgjsu","ijy","glarko","nbuorw","nsfspyox","qkjzgws","qkjzgws","fqizrrnmif","pwqvwmlgri","nftk","qrkgmliewc","jqrlad","nftk","zskaqzwo","glarko","nsfspyox","zlfiwwb","hwlvqgkdbo","htpvnmozay","nsfspyox","zskaqzwo","htpvnmozay","zskaqzwo","nbuorw","qkjzgws","zlfiwwb","pwqvwmlgri","zskaqzwo","qengse","glarko","qkjzgws","pwqvwmlgri","fqizrrnmif","nbuorw","nftk","ijy","hdemkfr","nftk","qkjzgws","jqrlad","nftk","ccjel","qggx","ijy","qengse","nftk","htpvnmozay","qengse","eonrg","qengse","fqizrrnmif","hwlvqgkdbo","qengse","qengse","qggx","qkjzgws","qggx","pwqvwmlgri","htpvnmozay","qrkgmliewc","qengse","fqizrrnmif","qkjzgws","qengse","nftk","htpvnmozay","qggx","zlfiwwb","bwp","ocgjsu","qrkgmliewc","ccjel","hdemkfr","nsfspyox","hdemkfr","qggx","zlfiwwb","nsfspyox","ijy","qkjzgws","fqizrrnmif","qkjzgws","qrkgmliewc","glarko","hdemkfr","pwqvwmlgri"], 14));
// console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 3));



// ["nftk","qkjzgws","qrkgmliewc","qengse","nsfspyox","htpvnmozay","hdemkfr","pwqvwmlgri","qggx","glarko","fqizrrnmif","zskaqzwo","zlfiwwb","ijy"]
// ["nftk","qkjzgws","qrkgmliewc","nsfspyox","qengse","htpvnmozay","fqizrrnmif","glarko","hdemkfr","pwqvwmlgri","qggx","zskaqzwo","ijy","zlfiwwb"]
