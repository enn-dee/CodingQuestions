/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let total = (n * (n + 1) / 2)
    let leftSum = 0;
    for (let i = 1; i <= n; i++) {
        leftSum += i;
        let rightSum = total - leftSum + i;
        if (rightSum === leftSum) return i;
    }
    return -1;
};