function solution(n) {
    var answer = (Array.from(String(n), Number)).reduce((a, b) => a + b);
    return answer;
}