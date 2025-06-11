/* // Brute Force Approch - ((O(n²)))

function isValid(s) {
    let prevLength = -1;

    while (s.length !== prevLength) {
        prevLength = s.length;
        s = s.replace("()", "").replace("{}", "").replace("[]", "");
    }
    return s.length === 0;
}
 */

//  Optimized Approach: Stack - (O(n))

function isValid(s) {
    const stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for (let char of s) {
        if (map[char])   {
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) return false;
            stack.pop();
        } else stack.push(char);
    }
    return stack.length === 0;
}

let s = "{[()]}";
console.log(isValid(s));