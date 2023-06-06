function solution(my_string, n) {
    var repeatedChars = [];
    for (var i = 0; i < my_string.length; i++) {
        repeatedChars.push(my_string[i].repeat(n));
    }
    return repeatedChars.join('');
}