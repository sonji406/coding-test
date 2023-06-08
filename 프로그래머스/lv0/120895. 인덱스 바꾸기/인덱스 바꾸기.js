function solution(my_string, num1, num2) {
    const firstPart = my_string.substring(0, num1);
    const secondPart = my_string.substring(num1 + 1, num2);
    const lastPart = my_string.substring(num2 + 1);
    
    return firstPart + my_string[num2] + secondPart + my_string[num1] + lastPart;
}