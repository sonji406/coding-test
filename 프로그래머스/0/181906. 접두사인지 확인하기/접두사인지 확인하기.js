function solution(my_string, is_prefix) {
    let answer = 0;
    let str = '';

    for (i=0; i<my_string.length; i++) {
        str = str + my_string[i];

        if (str===is_prefix) {
            answer = 1;
        }
    }
    
    return answer;
}