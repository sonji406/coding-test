function solution(a, d, included) {
    let answer = included[0] ? a : 0;
    
    for (i = 1; i < included.length; i++) {
        a += d;
        included[i] ? answer += a : answer += 0;
    }
    
    return answer;
}