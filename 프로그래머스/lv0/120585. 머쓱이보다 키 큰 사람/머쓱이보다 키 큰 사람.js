function solution(array, height) {
    // var answer = array.map((value) => value > height ? value : null);
    // return answer.filter((value) => value !== null).length;
    return array.filter((value) => value > height).length;
}