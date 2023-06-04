function solution(numbers, num1, num2) {
    // var answer = numbers.filter(function(element, index) {
    //     return (num1 <= index) && (index <= num2);
    // });
    // return answer;
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}