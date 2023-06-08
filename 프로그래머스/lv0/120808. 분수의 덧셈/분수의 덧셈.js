function solution(numer1, denom1, numer2, denom2) {
    // 최대공약수(GCD)를 계산하는 함수
    const gcd = (a, b) => {
        // b가 0이 되면 a를 반환하여 재귀 호출을 종료합니다.
        if (b === 0) {
            return a;
        }
        // a와 b의 나머지를 이용하여 재귀 호출합니다.
        return gcd(b, a % b);
    };

    // 최소공배수(LCM)를 계산하는 함수
    const lcm = (a, b) => {
        // 두 수의 곱을 최대공약수로 나누어 최소공배수를 계산합니다.
        return (a * b) / gcd(a, b);
    };

    // 두 분모의 최소공배수를 계산하여 공통 분모로 사용합니다.
    const commonDenom = lcm(denom1, denom2);

    // 각 분자를 공통 분모로 맞춰서 더한 값을 계산합니다.
    const sumNumer = numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);

    // 분자와 분모의 최대공약수를 구합니다.
    const greatestCommonDivisor = gcd(sumNumer, commonDenom);

    // 분자를 최대공약수로 나눈 값을 기약 분수의 분자로 사용합니다.
    const reducedNumer = sumNumer / greatestCommonDivisor;
    // 분모를 최대공약수로 나눈 값을 기약 분수의 분모로 사용합니다.
    const reducedDenom = commonDenom / greatestCommonDivisor;

    // 기약 분수인 [reducedNumer, reducedDenom] 배열을 반환합니다.
    return [reducedNumer, reducedDenom];
}
