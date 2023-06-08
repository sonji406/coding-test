function solution(my_string) {
    return my_string.split('').map((value) => value.toUpperCase() === value ? value.toLowerCase() : value.toUpperCase()).join('');
}