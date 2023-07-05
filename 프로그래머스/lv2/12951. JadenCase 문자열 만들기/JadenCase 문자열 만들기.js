function solution(s) {
    var answer = s.split(' ').map(a => a.length > 0 ? a[0].toUpperCase() + a.slice(1).toLowerCase() : "").join(" ");

    return answer;
}