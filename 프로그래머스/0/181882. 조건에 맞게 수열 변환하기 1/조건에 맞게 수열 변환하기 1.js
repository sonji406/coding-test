function solution(arr) {
    const answer = arr.map(x => {
        if(x >= 50 && x%2 === 0) {
            return x/2;
        } else if(x < 50 && x%2 !== 0) {
            return x*2;
        }
        
        return x;
    })
    
    return answer;
}