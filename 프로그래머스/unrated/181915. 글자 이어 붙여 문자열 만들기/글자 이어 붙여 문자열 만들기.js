function solution(my_string, index_list) {
    const stringArray = Array.from(my_string);
    const resultArray = index_list.map((num) => stringArray[num]);
    const result = resultArray.join('');
    
    return result;
}