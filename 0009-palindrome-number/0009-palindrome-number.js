/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let temp = x, org = 0;
    while (temp > 0) {
        let rem = temp % 10;
        org = org * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    if (org === x) return true;
    return false;
};