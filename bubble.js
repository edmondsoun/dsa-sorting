function bubbleSort(array) {
    //[5,3,2,1,4]

    //two loops

    // Loop with i from end of array towards beginning
    for (let i = array.length; i >= 0; i--) {
        // Loop with j from the beginning until i - 1
        for (let j = 0; j < i-1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;

}

module.exports = bubbleSort;
