function solution(my_strings, parts) {
    let answer = '';
    
    for (i=0; i < my_strings.length; i++) {
        for (j=parts[i][0]; j <= parts[i][1]; j ++) {
            answer += my_strings[i][j];
        }  
    }
    
    return answer;
}