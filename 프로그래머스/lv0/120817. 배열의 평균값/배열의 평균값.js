function solution(numbers) {
    const result = numbers.reduce(function(acc, cur, idx) {
        return acc += cur;
    }, 0);
    return result/numbers.length;
}