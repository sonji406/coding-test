function solution(absolutes, signs) {
    let answer = 0;
    
    for (i = 0; i < absolutes.length; i++) {
        let num = signs[i] ? absolutes[i] : -absolutes[i];
        
        answer = answer + num;
    }
        
    return answer;
}