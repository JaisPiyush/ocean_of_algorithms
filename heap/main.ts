export class Heap {
  // readonly comp: (root: T, item: T) => boolean;
  arr: Array<number>;

  constructor(arr: Array<number> = []) {
    this.arr = arr;
  }

  public maxHeapify(root: number) {
    let smallest = root;
    const left = root * 2 + 1;
    const right = root * 2 + 2;
    if (left < this.arr.length && this.arr[left] > this.arr[smallest]) {
      smallest = left;
    }
    if (right < this.arr.length && this.arr[right] > this.arr[smallest]) {
      smallest = right;
    }

    if (smallest != root) {
      const temp = this.arr[root];
      this.arr[root] = this.arr[smallest];
      this.arr[smallest] = temp;
      this.maxHeapify(smallest);
    }
  }

  public heapify(type: "max" | "min" = "max") {
    for (let index = this.arr.length - 1; index >= 0; index--) {
      if (type === "max") {
        this.maxHeapify(index);
      }
    }
  }

  public deleteKey(index: number) {
    this.arr[index] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.maxHeapify(index);
    console.log("From delete: ", this.arr);
  }

  public insert(item: number) {
    let currentIndex = this.arr.length;
    this.arr.push(item);
    while (currentIndex >= 0) {
      const parent = Math.floor((currentIndex - 1) / 2);
      this.maxHeapify(parent);
      currentIndex = parent;
    }

    console.log("from Insert: ", this.arr);
  }
}

if (import.meta.main) {
  const heap = new Heap(Deno.args.map((v) => parseInt(v)));
  heap.heapify();
  console.log(heap.arr);
  heap.insert(100);
  heap.insert(75);
  heap.insert(25);
  heap.deleteKey(2);
}
