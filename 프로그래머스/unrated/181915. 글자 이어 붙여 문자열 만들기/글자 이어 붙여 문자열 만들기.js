function solution(my_string, index_list) {
    var result = '';
    const stringArray = Array.from(my_string);
    const resultArray = index_list.map((num) => stringArray[num]);
    result = resultArray.join('');
    
    return result;
}