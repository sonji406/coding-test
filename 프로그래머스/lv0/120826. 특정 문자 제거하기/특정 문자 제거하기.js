function solution(my_string, letter) {
    let result = new RegExp(letter, "g");
    return my_string.replace(result, '');
}