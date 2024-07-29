function mergeSort(arr, leftIndex, rightIndex) {
    //base case
    if (arr.length === 1) {
        return arr;
    }
    else {
        var midpoint = Math.floor((arr.length - 1) / 2);
        // const l = new Array((midpoint + 1) - leftIndex);
        // const r = new Array(rightIndex - midpoint);
        var l = arr.slice(leftIndex, midpoint + 1);
        var r = arr.slice(midpoint + 1, rightIndex + 1);
        var leftSplit = mergeSort(l, 0, l.length - 1);
        var rightSplit = mergeSort(r, 0, r.length - 1);
        //sort leftArr and rightArr and return newly sorted array
        var sortedArr = [];
        var splitLeftInd = 0;
        var splitRightInd = 0;
        do {
            var leftElement = splitLeftInd !== leftSplit.length ? leftSplit[splitLeftInd] : null;
            var rightElement = splitRightInd !== rightSplit.length ? rightSplit[splitRightInd] : null;
            if (leftElement == null) {
                sortedArr.push(rightElement);
                splitRightInd++;
            }
            else if (rightElement == null) {
                sortedArr.push(leftElement);
                splitLeftInd++;
            }
            else if (leftElement < rightElement) {
                sortedArr.push(leftElement);
                splitLeftInd++;
            }
            else {
                sortedArr.push(rightElement);
                splitRightInd++;
            }
        } while (splitLeftInd < leftSplit.length || splitRightInd < rightSplit.length);
        return sortedArr;
    }
}
//main
// const array = [40,2,30,15,1,60,90,1000];
// const array = [5,1,1,1,0];
var array = Array.from({ length: 500 }, function () { return Math.floor(Math.random() * 10000); });
console.log("before sorting: ".concat(array));
var sortedArray = mergeSort(array, 0, array.length - 1);
console.log("after sorting: ".concat(sortedArray));
//# sourceMappingURL=mergeSort.js.map