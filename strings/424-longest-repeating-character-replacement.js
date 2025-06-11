// Approach: Sliding Window - ((O(N)))

function characterReplacement(s, k) {
    let count = new Array(26).fill(0);
    let maxFreq = 0;
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let index = s.charCodeAt(right) - 'A'.charCodeAt(0);
        count[index]++;
        maxFreq = Math.max(maxFreq, count[index]);

        if ((right - left + 1) - maxFreq > k) {
            let leftIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
            count[leftIndex]--;
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

let s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));