// initially i thought that just assuming everything was a bigint would be the easiest way to fix the breaking test, but there is this: 
// The floating-point arithmetic is implemented in hardware, Hence it is faster. The Arbitrary-precision arithmetic is entirely implemented in software hence slower.
// https://www.tektutorialshub.com/typescript/typescript-bigint-vs-number/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    // convert the two lists to numbers
    let num1 = converter(l1)
    let num2 = converter(l2)

    let sum
    let temp
    let sumList
    let current

    // if it's a bigint, gotta do these operations with strings
    if (typeof num1 === "string" || typeof num2 === "string") {
        sum = BigInt(num1) + BigInt(num2)
        sum = sum.toString()

        temp = sum[sum.length - 1]
        sumList = new ListNode(temp)
        current = sumList

        for (let i = sum.length - 2; i >= 0; i--) {
            temp = parseInt(sum[i])
            current.next = new ListNode(temp)
            current = current.next
        }
    }
    else {
        // get the sum
        sum = num1 + num2

        // use modulo to hack off each digit and 
        // put it back into a linked list
        temp = sum % 10
        sum = (sum - temp) / 10
        sumList = new ListNode(temp)
        current = sumList
        while (sum > 0) {
            temp = sum % 10
            current.next = new ListNode(temp)
            sum = (sum - temp) / 10
            current = current.next
        }
    }

    return sumList
}

var converter = (list) => {
    //if theres only one node that's our number in full
    if (list.next === null) {
        return list.val
    }

    // otherwise find the end of the list and build the number up as we go
    let numstr = ""
    let current = list
    while (current !== null) {
        numstr = `${current.val}${numstr}`
        current = current.next
    }

    // if it's a bigint, return the string
    if (parseInt(numstr) > Number.MAX_SAFE_INTEGER) {
        return numstr
    }

    // if not, just return the num
    return parseInt(numstr)
}

let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))

// alternate test case
// l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
// l2 = [5, 6, 4]