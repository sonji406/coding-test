function solution(n, control) {
    var answer = n;
    [...control].forEach((x) => x === 'w' ? answer += 1 : x === 's' ? answer -= 1 : x === 'd' ? answer += 10 : answer -= 10);
    return answer;
}