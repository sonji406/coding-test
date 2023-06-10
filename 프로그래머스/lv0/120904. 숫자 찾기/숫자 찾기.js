function solution(num, k) {
    var answer = 0;
    const numArr = Array.from(String(num), Number);
    
    for (const [index, element] of numArr.entries()) {
        if (element === k) {
            answer = index + 1;
            break;
        } else { answer = -1; }
    }
    
    return answer;
}