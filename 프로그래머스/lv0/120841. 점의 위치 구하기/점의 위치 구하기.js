function solution(dot) {
    var answer = 0;
    const firstSign = Math.sign(dot[0]) === 1;
    const lastSign = Math.sign(dot[1]) === 1;
    
    if (firstSign) {
        if (lastSign) {
            answer = 1;
        } else {
            answer = 4;
        }
    } else if (lastSign) {
        answer = 2;
    } else {
        answer = 3;
    }
    return answer;
}