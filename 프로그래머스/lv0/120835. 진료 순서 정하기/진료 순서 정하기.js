function solution(emergency) {
    var answer = [...emergency].sort((a, b) => b - a);
    let arr = emergency.map((num) => answer.indexOf(num) + 1);
    
    return arr;
}