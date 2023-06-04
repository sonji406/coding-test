function solution(numbers) {
    const result = numbers.reduce((acc, cur, idx) => { return acc += cur; });
    return result/numbers.length;
}