function solution(strArr) {
    const answer = [];
    
    strArr.forEach((value, key) => {
        answer[key] = key%2 === 0 ? value.toLowerCase() : value.toUpperCase();
    })
    
    return answer;
}