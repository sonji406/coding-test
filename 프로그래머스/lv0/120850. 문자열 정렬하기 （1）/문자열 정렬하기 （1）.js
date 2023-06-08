function solution(my_string) {
    return Array.from(my_string)
        .filter((value) => !isNaN(value))
        .map((num) => parseInt(num))
        .sort((a, b) => a - b);
}