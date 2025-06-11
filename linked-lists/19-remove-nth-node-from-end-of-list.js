// Approch - Two Pointer & T.C - ((O(n)))

// Definition for singly-linked list
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 🔧 Function to remove nth node from end
var removeNthFromEnd = function(head, n) {
    // Step 1: Dummy node before head (helps handle edge cases)
    let dummy = new ListNode(0);
    dummy.next = head;

    // Step 2: Set two pointers to dummy
    let fast = dummy;
    let slow = dummy;

    // Step 3: Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 4: Move both pointers until fast reaches end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 5: Skip the target node
    slow.next = slow.next.next;

    // Step 6: Return updated list
    return dummy.next;
};

// 🔍 Helper to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// 🔍 Helper to print linked list
function printList(head) {
    let output = [];
    while (head !== null) {
        output.push(head.val);
        head = head.next;
    }
    console.log("Updated list:", output.join(" → "));
}

// 🔄 Test case
let head = arrayToList([1, 2, 3, 4, 5]);
let n = 2;

let updatedHead = removeNthFromEnd(head, n);
printList(updatedHead); // Output: 1 → 2 → 3 → 5