// Time Complexity	O(n + m) and Space Complexity	O(1)

// Define the ListNode class
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to merge two sorted lists
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-1);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes from whichever list is not empty
    current.next = list1 || list2;

    return dummy.next;
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print linked list
function printLinkedList(head) {
    let current = head;
    let output = "";
    while (current) {
        output += current.val + " -> ";
        current = current.next;
    }
    console.log(output + "null");
}

// Test data
const list1 = createLinkedList([1, 2]);
const list2 = createLinkedList([1, 3, 4]);

// Merge and print
const mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);
