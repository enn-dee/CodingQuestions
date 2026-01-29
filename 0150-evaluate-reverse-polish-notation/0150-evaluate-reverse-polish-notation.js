/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token !== "*" && token !== "/" && token !== "+" && token !== "-") {
            stack.push(parseInt(token, 10));
        } else {
            const opOne = stack.pop();
            const opTwo = stack.pop();
            let res;

            if (token === "*") {
                res = opTwo * opOne;
            } else if (token === "/") {
                res = Math.trunc(opTwo / opOne); 
            } else if (token === "+") {
                res = opTwo + opOne;
            } else if (token === "-") {
                res = opTwo - opOne;
            }

            stack.push(res);
        }
    }

    return stack.pop();
};