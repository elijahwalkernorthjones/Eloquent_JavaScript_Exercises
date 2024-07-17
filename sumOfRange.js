


function myRange(start, end) {
   let newArr= [];
    while (start <= end){
        newArr.push(start);
        // add start number to array, 
        start += 1; 
        // add one to start number
        //keep adding till start number is over end number
    }
    return newArr;
}

// console.log(myRange(2, 6))
// 2, 3, 4, 5, 6


function mySum(arr) {
    let result = 0;
    for(num in arr){
        result += arr[num];
    }
    return result
}

// console.log(mySum([1,2,3]))
// 6

// console.log(mySum(myRange(1,10)));
// 55

function stepRange(start, end, step = 1){   
    let newArr = [];
    if (step > 0){
        while( start <= end ){
            newArr.push(start);
            start += step;
        }
    } else if (step < 0 && start > end) {
        while( start >= end ){
            newArr.push(start);
            start += step;
        }
    }
    return newArr;
}
