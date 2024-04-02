function solution(numbers) {
    var answer = 0;
    
    for (i = 0; i < 10; i++) {
        numbers.includes(i) ? answer += 0 : answer += i;
    }
    
    return answer;
}