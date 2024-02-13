function solution(my_string, overwrite_string, s) {
    let answer = [...my_string];
    let str = [...overwrite_string];
    
    for (let i = 0; i < str.length; i++) {
        answer[s + i] = str[i];
    }
    
    return answer.join('');
}
