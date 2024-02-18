function solution(a, b, c) {
    let answer = 0;
    const sum = (a + b + c);
    const square = (a*a + b*b + c*c);
    const cube = (a*a*a + b*b*b + c*c*c);
    
    if (a === b) {
        if (b === c) {
            answer = sum * square * cube;
        } else {
            answer = sum * square;
        }
    } else {
        if (b === c || a === c) {
            answer = sum * square;
        } else {
            answer = sum;
        }
    }
    
    return answer;
}