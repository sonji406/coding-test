function solution(n)
{
    var answer = Array.from(String(n), Number);

    return answer.reduce((a, b) => a + b);
}