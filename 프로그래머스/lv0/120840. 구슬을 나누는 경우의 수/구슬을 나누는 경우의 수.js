function solution(balls, share) {
    let ballsSum = 1;
    let ballsShare = 1;
    let shareSum = 1;
    
    for (let i = 1; i <= balls; i++) {
        ballsSum *= i;
    }
    
    for (let j = 1; j <= balls - share; j++) {
        ballsShare *= j;
    }
    
    for (let k = 1; k <= share; k++) {
        shareSum *= k;
    }
    
    return Math.round(ballsSum / (ballsShare * shareSum));
}
