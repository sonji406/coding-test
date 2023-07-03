function solution(x) {
    const xArr = Array.from(String(x),Number);
    const sum = xArr.reduce((a, b) => a + b);
    return x%sum === 0;
}