// Definition for singly-linked list.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Find the middle of the linked list
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // Move slow pointer by 1 step
        fast = fast.next.next;  // Move fast pointer by 2 steps
    }

    return slow; // Slow pointer will be at the middle
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    let current = head;

    while (current) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" → ") + " → null");
}

// Example usage:

let head = createLinkedList([1, 2, 3, 4, 5, 6]);

console.log("Original Linked List:");
printLinkedList(head);

let middle = middleNode(head);

console.log("Middle of the Linked List:");
printLinkedList(middle);