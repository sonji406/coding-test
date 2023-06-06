function solution(array, height) {
    var answer = array.map((value) => value > height ? value : null);
    return answer.filter((value) => value !== null).length;
}