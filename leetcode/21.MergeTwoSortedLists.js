/**You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode();
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    };
    return dummy.next;

    /**
     * if (!list1 || !list2) return list2 || list1;
     * if(list1.val < list2.val) {
     * list1.next = mergeTwoLists(list1.next, list2);
     * return list1;
     * } else {
     * list2.next = mergeTwoLists(list1, list2.next);
     * return list2;
     * }
     */
};
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);