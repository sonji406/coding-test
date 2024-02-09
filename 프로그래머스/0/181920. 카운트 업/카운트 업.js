function solution(start_num, end_num) {
    let answer = [];
    let num = start_num;
    
    
    while(num !== end_num + 1) {
        answer.push(num);
        num += 1;
    }
    
    return answer;
}