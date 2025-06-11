// Optimized Approach (Using HashMap) T.C - O(k log k)

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");
        if(!map.has(sortedStr)) map.set(sortedStr, []);

        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));