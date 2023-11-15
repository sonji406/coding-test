function solution(s)
{
    var answer = [];
    
    for(i = 0; i < s.length; i++) {
        if(answer.length === 0 || answer[answer.length - 1] !== s[i]) {
            answer.push(s[i]);
        } else {
            answer.pop();
        }
    }

    return answer.length === 0 ? 1 : 0;
}