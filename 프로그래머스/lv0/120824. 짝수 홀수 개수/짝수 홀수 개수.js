function solution(num_list) {
    let evenCnt = 0;
    let oddCnt = 0;
    
    for (const char of num_list) {
        if (char%2 === 0) {
            evenCnt++;
        } else {
            oddCnt++;
        }
    }
    
    return [evenCnt, oddCnt];
}