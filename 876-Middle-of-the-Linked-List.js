// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

var middleNode = function (head) {
    const midLength = Math.floor(head.length / 2)
    const midArr = head.slice([midLength])
    return midArr
};
console.log(middleNode([1, 2, 3, 4, 5]));