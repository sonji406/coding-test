function solution(s){
    var answer = [];
    if (s.length % 2 !== 0) {
        return false;
    } 
    
    for (let char of s) {
        if (char === "(") {
            answer.push(char);
        } else {
            if (answer.length === 0) {
                return false;
            } else {
                answer.pop();
            }
        }
    }

    return answer.length === 0;
}
