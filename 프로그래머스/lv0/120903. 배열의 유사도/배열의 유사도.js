function solution(s1, s2) {
    var count = 0;
    
    s1.forEach(function(s1Value) {
        s2.forEach(function(s2Value) {
            if (s1Value === s2Value) {
                count++;
            }
        })
    })
    return count;
}