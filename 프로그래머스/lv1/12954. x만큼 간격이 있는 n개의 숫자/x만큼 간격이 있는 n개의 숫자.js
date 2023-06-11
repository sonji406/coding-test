function solution(x, n) {
    var answer = [];
    let pushNum = x;
    
    while (answer.length !== n) {
        answer.push(pushNum);
        pushNum += x;
    }
    
    return answer;
}