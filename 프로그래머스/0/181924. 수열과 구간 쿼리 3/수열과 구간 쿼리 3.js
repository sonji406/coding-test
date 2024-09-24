function solution(arr, queries) {
    var answer = [...arr];
    
    for (let [i, j] of queries) {
    [answer[i], answer[j]] = [answer[j], answer[i]];
    }
    
    return answer;
}