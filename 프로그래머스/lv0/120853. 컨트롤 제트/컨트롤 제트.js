function solution(s) {
    var answer = s.split(' ');
    let sum = 0;
    
    for (let [index, value] of answer.entries()) {
        if (value !== 'Z') {
            sum += value * 1;
        }
        if (value === 'Z') {
            sum -= answer[index - 1] *1;
        }
    }

    return sum;
}