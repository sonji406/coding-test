function solution(num_list) {
    var answer = [];
    while (num_list.length) {
        answer.push(num_list.pop());
    }
    return answer;
}