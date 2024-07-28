function solution(n) {
    var ans = 0;
    let num = n;
    
    while (num > 0) {
        if (num % 2 !== 0) {
            ans += 1;
            num -= 1;
        }
        
        num = num / 2;
    }
    
    return ans;
}
