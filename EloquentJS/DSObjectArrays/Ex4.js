/*List*/

class ListNode{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(node1.value);
console.log(node1.next.value);
console.log(node1.next.next.value);
console.log(node1.next.next.next);