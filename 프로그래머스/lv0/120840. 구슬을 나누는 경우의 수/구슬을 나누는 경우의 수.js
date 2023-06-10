function solution(balls, share) {
    if (balls === share) {
        return 1;
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
