function solution(my_string, index_list) {
    var answer = '';
    const stringArray = Array.from(my_string);
    
    for (const num of index_list) {
        answer += stringArray[num];  
    }
    
    
//     for (let i = 0; i < index_list.length; i++) {
//         const arrayIndex = index_list[i];
//         if (stringArray[arrayIndex] !== undefined) {
//             answer += stringArray[arrayIndex];
//         }
//     }
    
    return answer;
}