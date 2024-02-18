function solution(numLog) {
    var answer = '';
    
    for (i=0; i < numLog.length - 1; i++) {
        numLog[i + 1] - numLog[i] === 1 ? answer += 'w' : numLog[i + 1] - numLog[i] === 10 ? answer += 'd' : numLog[i + 1] - numLog[i] === -10 ? answer += 'a' : answer += 's';
    }
    
    return answer;
}