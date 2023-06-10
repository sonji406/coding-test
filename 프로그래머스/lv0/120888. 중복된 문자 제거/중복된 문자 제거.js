function solution(my_string) {
    var answer = '';
    const obj = {};
    
    for (const char of my_string) {
        obj[char] = (obj[char] || 0) + 1;
    }
    
    return Object.keys(obj).join('');
}