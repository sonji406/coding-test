function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    return arr.length === 0 ? [-1] : arr;
}

// function solution(arr) {
//     var answer = [...arr];
    
//     answer.sort((a, b) => a - b )
    
//     for (i=0; i<arr.length; i++) {
//         if(arr[i] === answer[0]) {
//             arr.splice(arr.indexOf(arr[i]), 1);
//         }
//     }
    
//     return arr.length === 0 ? [-1] : arr;
// }