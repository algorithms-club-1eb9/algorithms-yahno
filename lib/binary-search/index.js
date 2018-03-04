module.exports = (sequence, el) => {
    let start = 0;
    let end = sequence.length;
    let middle = 0;
    let index = -1;
    let counter = end;
    function findElement() {
        counter -= 1;
        middle = Math.round((end + start) / 2);
        if (sequence[middle] === el) {
            index = middle;
        }
        if (sequence[middle] <= el) {
            end = middle;
        } else {
            start = middle;
        }
        if (counter > 0) {
            findElement();
        }
    }
    findElement();
    return index;
};
