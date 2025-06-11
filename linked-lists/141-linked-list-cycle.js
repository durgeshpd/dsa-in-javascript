// Time Complexity: O(n). Space Complexity: O(1)

// 🔹 Define a Linked List Node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 🔹 Function to Detect Cycle in the Linked List
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;         // Move one step
        fast = fast.next.next;    // Move two steps

        if (slow === fast) return true; // Cycle detected
    }

    return false; // No cycle
};

// 🔹 Helper Function to Create a Linked List from an Array
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;
    
    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    // Create linked list and store reference to cycle node if pos is valid
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current; // Store the cycle connection point
    }

    if (cycleNode !== null) {
        current.next = cycleNode; // Create a cycle in the linked list
    }

    return head;
}

// 🔹 Example Usage:

// Case 1: No cycle
let head1 = createLinkedList([3, 2, 0, -4], -1);
console.log("Cycle Detected (No Cycle List):", hasCycle(head1)); // Output: false

// Case 2: Cycle present (cycle at index 1)
let head2 = createLinkedList([3, 2, 0, -4], 1);
console.log("Cycle Detected (Cycle at index 1):", hasCycle(head2)); // Output: true