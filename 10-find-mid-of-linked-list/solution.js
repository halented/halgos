/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
/**
 * param {ListNode} head
 * return {ListNode}
 */

var middleNode = function(head) {
    let counter = 0
    let val = head
    
//     find the total number of nodes
    while (val != null){
        val = val.next
        counter++
    }
    
//     find the middle node(s)
    let mid = Math.floor(counter/2)
    
//     reset the counter & starting node, and step through the correct number of next's
    counter = 0
    val = head
    while(counter<mid){
        val= val.next
        counter ++
    }
    
    return val
};