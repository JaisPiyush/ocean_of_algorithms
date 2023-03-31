function getCharacterFrequency(data: string): Record<string, number> {
  const freq: Record<string, number> = {};
  for (let index = 0; index < data.length; index++) {
    if (freq[data[index]] === undefined) {
      freq[data[index]] = 0;
    }
    freq[data[index]] += 1;
  }
  return freq;
}

function maxHeapify(
  freq: Record<string, number>,
  arr: string[],
  index: number
): string[] {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < arr.length && freq[arr[left]] > freq[arr[largest]]) {
    largest = left;
  }
  if (right < arr.length && freq[arr[right]] > freq[arr[largest]]) {
    largest = right;
  }

  if (largest !== index) {
    const temp = arr[index];
    arr[index] = arr[largest];
    arr[largest] = temp;
    maxHeapify(freq, arr, largest);
  }
  return arr;
}

function generateCodeTableFromHeap(arr: string[]): Record<string, string> {
  const codingTable: Record<string, string> = {};
  codingTable[arr[0]] = "0";
  for (let index = 1; index < arr.length; index++) {
    const parent = Math.floor((index - 1) / 2);
    if (index % 2 === 0) {
      codingTable[arr[index]] = codingTable[arr[parent]] + "1";
    } else {
      codingTable[arr[index]] = codingTable[arr[parent]] + "0";
    }
  }
  return codingTable;
}

function createTreeFrequencyData(
  freq: Record<string, number>
): Record<string, string> {
  let arr = Object.keys(freq);
  for (let index = arr.length - 1; index >= 0; index--) {
    arr = maxHeapify(freq, arr, index);
  }
  return generateCodeTableFromHeap(arr);
}

function encodeData(data: string): [Record<string, string>, string] {
  const codingTable = createTreeFrequencyData(getCharacterFrequency(data));
  const encoded: string[] = [];
  for (let index = 0; index < data.length; index++) {
    encoded.push(codingTable[data[index]]);
  }
  return [codingTable, encoded.join("")];
}

function decode(table: Record<string, string>, res: string): string {
  const decoded: string[] = [];
  for (const char of res) {
  }
  return decoded.join("");
}

if (import.meta.main) {
  const [table, res] = encodeData(Deno.args.join(""));
  console.log(res);
}
