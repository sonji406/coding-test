// function solution(n) {
//     var answer = 0;
//     let firstNum = 1;
    
//     while (firstNum <= n) {
//         if (n % firstNum === 0) {
//             answer++;
//         }
//         firstNum++;
//     }
//     return answer;
// }
function solution(n) {
    var answer = 0;
    let firstNum = 1;
    
    while (firstNum <= Math.sqrt(n)) {
        if (n % firstNum === 0) {
            answer += firstNum === n / firstNum ? 1 : 2;
        }
        firstNum++;
    }
    return answer;
}
