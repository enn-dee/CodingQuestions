/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = new Object();
    
    for(let x of this ){
      const newKey = fn(x)
      if(newKey in obj){
        obj[newKey].push(x)
      }
      else{
        obj[newKey] = [x]
      }
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */