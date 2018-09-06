function Find(target, array) {
    let i = 0;
    let j = array[0].length - 1
    while (i < array.length && j >= 0) {
        if (array[i][j] == target) {
            return true
        } else if (array[i][j] < target) {
            i++
        } else if (array[i][j] > target) {
            j--
        }
    }
    return false
}

console.log(Find(16, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]))
console.log(Find(13, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]
]))