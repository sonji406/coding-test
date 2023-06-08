function solution(cipher, code) {
    var answer = '';
    let i = code - 1;
    
    while (cipher.length >= i) {
        answer += cipher.substr(i,1);
        i += code;
    }
    
    return answer;
}