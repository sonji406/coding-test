function solution(n) {
    return Number(Array.from(String(n), Number).sort((a, b) => b - a).join(''));
}