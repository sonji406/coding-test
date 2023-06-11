function solution(before, after) {
    var answer = 1;
    const beforeArr = Array.from(before).sort();
    const afterArr = Array.from(after).sort();
    
    for (let i = 0; i < beforeArr.length; i++) {
        if (beforeArr[i] !== afterArr[i]) {
            answer = 0;
            break;
        }
    }

    return answer;
}