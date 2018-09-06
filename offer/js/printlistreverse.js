function printListFromTailToHead(head) {
    let array1 = []
    if (head) {
        if (head.next) {
            console.log(head)
            array1 = printListFromTailToHead(head.next)
        }
        array1.push(head.val)
    }
    return array1
}