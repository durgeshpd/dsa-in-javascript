// Optimized Approach: Sorting + HashMap - O(M log M)

function groupAnagrams(strs) {
    let map = new Map();

    for(let word of strs) {
        let sortedWord = word.split('').sort().join('');
        if(!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }
    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));