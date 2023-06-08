function solution(array) {
    var answer = [];
    const maxNum = array.reduce((a, b) => Math.max(a, b))
    
    answer.push(maxNum);
    answer.push(array.indexOf(maxNum))
    
    return answer;
}