function replaceSpace(str) {
    let astr = str.split("");
    let _astr = astr.map(item => {
        if (item == " ") {
            return "%20";
        } else {
            return item;
        }
    });

    return _astr.join("");
}

console.log(replaceSpace('asdas asdasd  asd'))