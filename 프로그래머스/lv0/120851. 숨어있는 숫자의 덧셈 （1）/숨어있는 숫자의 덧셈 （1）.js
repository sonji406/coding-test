function solution(my_string) {
    var answer = Array.from(String(my_string), Number).filter((value) => !isNaN(value)).reduce((a, b) =>  a+ b);
    return answer;
}