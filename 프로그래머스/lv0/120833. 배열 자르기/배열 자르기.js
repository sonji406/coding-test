function solution(numbers, num1, num2) {
    var answer = numbers.filter(function(element, index, array) {
        return (num1 <= index) && (index <= num2);
    });
    return answer;
}