function solution(my_string) {
    const myArray = Array.from(my_string);
    let answer = myArray.map(function(value) {
        return value.toUpperCase() === value ? value.toLowerCase() : value.toUpperCase();
    });
    
    return answer.join('');
}