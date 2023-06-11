function solution(i, j, k) {
    var answer = 0;

    for (let index = i; index <= j;  index++) {
        const arr = Array.from(String(index), Number);
        for (let num of arr) {
            if (num === k) {
                answer += 1;
            }
        }
    }
    return answer;
}