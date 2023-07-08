function solution(num) {
    var answer = 0;
    let numberOne = num;
    
    while(numberOne !== 1) {
        if (numberOne % 2 === 0) {
            numberOne = numberOne / 2;
        } else {
            numberOne = numberOne * 3 + 1
        }
        answer++;
        if (answer === 500) {
            return -1;
        }
    }

    return answer;
}