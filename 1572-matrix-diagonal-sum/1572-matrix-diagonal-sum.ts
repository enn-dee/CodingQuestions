function diagonalSum(mat: number[][]): number {
    let len = mat.length;
   let sum:number = 0;
   
   for(let i = 0;i<len;i++){
     sum +=mat[i][i];
     if(i !== len-i-1){
       sum += mat[i][len-1-i]
     }
   }
    return  sum
};