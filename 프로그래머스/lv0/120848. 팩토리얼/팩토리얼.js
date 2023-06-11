function solution(n) {
    var answer = 1;
    let num = 1;
    
    while (num <= n) {
        num *= answer; 
        answer ++;
    }
    
    return answer - 2;
}