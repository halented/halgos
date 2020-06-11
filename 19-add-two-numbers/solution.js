var addTwoNumbers = function(l1, l2) {
    // if the values of noth nodes are 0, return 0
        if(!l1.val && !l2.val){return l1}
    // if the values of either node is 0, return the other one
        if(!l1.val && l2.val){return l2}
        if(!l2.val && l1.val){return l1}
    //     first, form both integers. 
        // we can access values like node.val, and we can move forward with node.next
    //     make a helper function that moves through the list until we reach a node with a next which is null, and add the result of those two things together
        let ultimateNum = helper(l1) + helper(l2)
    
    
    // on each iteration of this while, loop, we need to make a new node, and give it the previous node as its next value
            
    //         rotate the number
            let str = ''
        while(ultimateNum>0){
            str += ultimateNum%10
            ultimateNum = Math.floor(ultimateNum/10)
        }
        ultimateNum = parseInt(str)
    
    // using modulo, hack off the last number of ultimateNum, make a linked list of it
            let newNode = new ListNode(ultimateNum%10)
            ultimateNum = Math.floor(ultimateNum/10)
        while(ultimateNum>0){
            let tempNode = new ListNode(ultimateNum%10, newNode)
            
            newNode = tempNode
            ultimateNum = Math.floor(ultimateNum/10)
        }
        return newNode
    };
    
    function helper(node){
        let retArr = [node.val]
        let current = node.next
        while(current){
            retArr.unshift(current.val)
            current = current.next
        }
        return parseInt(retArr.join(""))
    }
    
    function cl(input1){
        console.log(input1)
    }


    // this solution is not totally working