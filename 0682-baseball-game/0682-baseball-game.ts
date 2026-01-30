function calPoints(operations: string[]): number {
    let record: number[] = [];
  let sum = 0;

  for (const op of operations) {
    if (!isNaN(Number(op))) {
      const val = Number(op);
      record.push(val);
      sum += val;
    } 
    else if (op === "D") {
      const val = record[record.length - 1] * 2;
      record.push(val);
      sum += val;
    } 
    else if (op === "+") {
      const val = record[record.length - 1] + record[record.length - 2];
      record.push(val);
      sum += val;
    } 
    else if (op === "C") {
      const removed = record.pop()!;
      sum -= removed;
    }
  }

  return sum;
};