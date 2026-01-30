function isMonotonic(nums: number[]): boolean {
    let isDecreasing: boolean = true;
  let isIncreasing: boolean = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isDecreasing = false;
    }
    if (nums[i] > nums[i + 1]) {
      isIncreasing = false;
    }
  }

  return isDecreasing || isIncreasing;
};