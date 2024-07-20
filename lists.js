

// first create a function called arrayToList that 
// turns an array [1,2,3] 
// into 
// let list = {
//     value: 1,
//     rest: {
//         value:2,
//         rest: {
//             value: 3,
//             rest: null
//         }
//     }
// };

let myArr = [1,2,3];


function arrayToList(array){
    let list = null
    for(let i = array.length -1; i >=0; i--){
        list = {value: array[i], rest: list}
    }
    return list;
}

