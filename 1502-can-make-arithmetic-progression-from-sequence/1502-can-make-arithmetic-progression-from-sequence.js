/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let nums = bubbleSort(arr)
    if (nums.length === 2) return true;

    if (nums.length > 2) {
        let diff = nums[1] - nums[0]

        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] !== diff) return false;
        }
    }
    return true;
};

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}