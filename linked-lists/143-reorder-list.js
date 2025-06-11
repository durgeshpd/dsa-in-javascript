class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reorderList = function(head) {
    if (!head || !head.next) return;

    // 1. Find the middle
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half
    let prev = null, curr = slow.next;
    slow.next = null; // break the list into two
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // 3. Merge two halves
    let first = head, second = prev;
    while (second) {
        let tmp1 = first.next;
        let tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
};


function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printList(head) {
    let out = [];
    while (head) {
        out.push(head.val);
        head = head.next;
    }
    console.log("Reordered list:", out.join(" → "));
}

// Run test
let head = arrayToList([1, 2, 3, 4, 5]);
reorderList(head);
printList(head); // Expected: 1 → 5 → 2 → 4 → 3