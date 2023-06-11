function solution(s) {
    var answer = s.split(' ');
    let sum = 0;
    
    for (let num of answer) {
        if (num !== 'Z') {
            sum += num*1;
        }
    }
    
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === 'Z') {
            sum -= answer[i - 1]*1;
        }
    }

    return sum;
}