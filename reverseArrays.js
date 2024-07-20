
// reversing by creating new array
// relatively easy
let newArr = [];
function myReverse(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    return newArr;
}



randomArr = [1,2,3,4,5];


function reverseInPlace(arr){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex < rightIndex){
        let temp;
        temp = arr[rightIndex];
        arr[rightIndex] = arr[leftIndex];
        arr[leftIndex] = temp;
        leftIndex += 1;
        rightIndex -= 1
    }
    return arr;
}




// reversing an array in place...
// noticably more difficult haha