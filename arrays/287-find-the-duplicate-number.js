/* 
// Brute Force Approch (using Set) (O(n)) Space Complexity: (O(n))

function findDuplicate(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return num;

        set.add(num);
    }
    return -1;
}
 */

// Optimize Approch Floyd's Tortoise and Hare (Cycle Detection) (O(n)) T.C = (O(1))

/* 
Why Use This Method?
The problem states:

1. The array contains n + 1 integers where each integer is between 1 and n (inclusive).
2. There is only one duplicate number, but it could appear more than once.
3. The array is like a Linked List Cycle Detection problem, where the index acts as pointers and the values act as nodes.
 */

function findDuplicate(nums) {
    let slow  = nums[0];
    let fast = nums[0];


    // Step 1: Detect Cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Step 2: Find the duplicate starting point
    fast = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;

}

let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));

// Floyd's Cycle Detection Algorithm Explanation

// Why Use do...while Instead of while Loop?

// In Floyd's Cycle Detection Algorithm, two pointers (slow and fast) move through the array or linked list to detect a cycle.
// The key reason to use the do...while loop is to ensure both pointers move at least once before checking if they meet.

// What Happens If We Use while Loop?
// If we use a while loop like this:
// while (slow !== fast) {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
// }
// The condition checks first before any movement.

// Example:
// nums = [1, 1, 1, 1, 1];
// slow = nums[0]; // 1
// fast = nums[0]; // 1
// Both pointers are equal at the start, so the loop never executes — cycle detection fails.

// Why do...while Loop Works:
// do {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
// } while (slow !== fast);
// ✅ This loop moves both pointers at least once before checking the condition.

// Example:
// - slow → nums[1] = 1
// - fast → nums[nums[1]] = 1

// Now they meet again at 1, and the cycle is detected successfully.

// Summary 🔥
// Loop Type  | Will It Detect Cycle?
// while    | ❌ No (if pointers start at the same node)
// do...while | ✅ Yes

// Always use do...while when detecting cycles with pointers to guarantee they move at least once!