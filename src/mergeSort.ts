function mergeSort(arr: number[], leftIndex: number, rightIndex: number): (number | null)[] {
  //base case
  if (arr.length === 1) {
    return arr;
  } else {
    let midpoint = Math.floor((arr.length - 1) / 2);
    // const l = new Array((midpoint + 1) - leftIndex);
    // const r = new Array(rightIndex - midpoint);
    const l = arr.slice(leftIndex, midpoint + 1);
    const r = arr.slice(midpoint + 1, rightIndex + 1);

    let leftSplit = mergeSort(l, 0, l.length - 1);
    let rightSplit = mergeSort(r, 0, r.length - 1);
    
    //sort leftArr and rightArr and return newly sorted array
    const sortedArr: (number | null)[] = [];
    let splitLeftInd: number = 0;
    let splitRightInd: number = 0;
    do {
      const leftElement: number | null = splitLeftInd !== leftSplit.length ? leftSplit[splitLeftInd] : null;
      const rightElement: number | null = splitRightInd !== rightSplit.length ? rightSplit[splitRightInd] : null;
     
      if (leftElement == null) {
        sortedArr.push(rightElement)
        splitRightInd++;
      } else if (rightElement == null) {
        sortedArr.push(leftElement);
        splitLeftInd++;
      } else if (leftElement < rightElement) {
        sortedArr.push(leftElement);
        splitLeftInd++;
      } else {
        sortedArr.push(rightElement);
        splitRightInd++;
      }
    } while( splitLeftInd < leftSplit.length || splitRightInd < rightSplit.length);

    return sortedArr;
  }
}

//main
// const array = [40,2,30,15,1,60,90,1000];
// const array = [5,1,1,1,0];
const array = Array.from({length: 500}, () => Math.floor(Math.random() * 10000));
console.log(`before sorting: ${array}`)
const sortedArray = mergeSort(array, 0, array.length - 1);
console.log(`after sorting: ${sortedArray}`);