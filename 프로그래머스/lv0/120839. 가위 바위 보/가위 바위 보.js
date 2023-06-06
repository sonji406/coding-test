function solution(rsp) {
    var answer = '';
    const array = Array.from(String(rsp), Number);
    
    for (let i = 0; i < rsp.length; i++) {
        if (array[i] === 2) {
            answer += '0';
        } else if (array[i] === 0) {
            answer += '5';
        } else {
            answer += '2';
        }
    }

    return answer;
}