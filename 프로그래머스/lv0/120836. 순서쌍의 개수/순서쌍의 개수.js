function solution(n) {
    var answer = 0;
    let firstNum = 1;
    
    while (firstNum <= n) {
        if (n % firstNum === 0) {
            answer++;
        }
        firstNum++;
    }
    return answer;
}

