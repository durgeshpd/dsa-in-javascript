// Time Complexity: O(n).Space Complexity: O(1)
// 🔹 Define a Linked List Node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 🔹 Function to Reverse the Linked List
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next; // Store next node
        curr.next = prev;         // Reverse pointer
        prev = curr;              // Move prev forward
        curr = nextNode;          // Move curr forward
    }

    return prev; // New head of reversed list
};

// 🔹 Helper Function to Create a Linked List from an Array
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

// 🔹 Helper Function to Print a Linked List
function printLinkedList(head) {
    let result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" → ") + " → null");
}

// 🔹 Example Usage:
let head = createLinkedList([1, 2, 3, 4, 5]);

console.log("Original Linked List:");
printLinkedList(head);

let reversedHead = reverseList(head);

console.log("Reversed Linked List:");
printLinkedList(reversedHead);