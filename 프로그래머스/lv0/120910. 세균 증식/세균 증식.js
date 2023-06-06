function solution(n, t) {
    var answer = n;
    let time = 0;
    while (time !== t) {
        answer = answer * 2;
        time++;
    }
    return answer;
}