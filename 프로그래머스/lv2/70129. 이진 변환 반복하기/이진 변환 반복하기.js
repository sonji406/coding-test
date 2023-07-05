function solution(s) {
    let answer = s;
    let cnt = 0;
    let lenCnt = 0;
    
    while (answer !== "1") {
        let len = answer.length;
        answer = answer.split("0").join("");
        lenCnt += len - answer.length;
        answer = answer.length.toString(2);
        cnt++;
    }
    
    return [cnt, lenCnt];
}
