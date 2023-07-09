function solution(n) {
    let before = 0;
    let after = 1;
    
    for (let i = 0; i < n; i++) {
        let temp = (before + after) % 1234567;
        before = after;
        after = temp;
    }
    return before;
}