function solution(n) {
    // dp 배열을 만들고 첫 번째와 두 번째 칸의 값을 초기화
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1; // 첫 번째 칸은 1가지 방법
    dp[2] = 2; // 두 번째 칸은 2가지 방법

    // 세 번째 칸부터는 dp[n] = dp[n-1] + dp[n-2]로 계산
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; // 나머지 연산을 수행하여 큰 수 처리
    }

    return dp[n]; // n번째 칸에 도달하는 방법의 수 리턴
}
