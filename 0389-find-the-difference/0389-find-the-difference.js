/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(st1, st2) {
    let freq = new Array(26).fill(0);

for(let i =0;i<st1.length;i++){
    let index = st1.charCodeAt(i) - 97
    freq[index]++;
}

for(let j=0;j<st2.length;j++){
    let index = st2.charCodeAt(j) -97
    freq[index]--;
}

let res =''
for(let k=0;k<26;k++){
    if(freq[k]<0) {
        res = String.fromCharCode(k+97)
        break;
    }
}
return res;
};