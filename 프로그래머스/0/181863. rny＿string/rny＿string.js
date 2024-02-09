function solution(rny_string) {
    var answer = [...rny_string].map(x => {
        return x === 'm' ? 'rn' : x;
    });
    
    return answer.join('');
}