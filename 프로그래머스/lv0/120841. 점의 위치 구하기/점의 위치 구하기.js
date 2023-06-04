function solution(dot) {
    var answer = 0;
    const firstSign = Math.sign(dot[0]) === 1;
    const lastSign = Math.sign(dot[1]) === 1;
    
    if (firstSign && lastSign) {
        answer = 1;
    } else if (!firstSign && lastSign) {
        answer = 2;
    } else if (!firstSign && !lastSign) {
        answer = 3;
    } else {
        answer = 4;
    }
    return answer;
}