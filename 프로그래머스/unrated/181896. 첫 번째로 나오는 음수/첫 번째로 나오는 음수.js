function solution(num_list) {
    var answer = num_list.findIndex((num) => num < 0);
    
    // for (const [ index, element ] of num_list.entries()) {
    //     if (Math.sign(element) === -1) {
    //         answer = index;
    //         break;
    //     } else answer = -1;
    // }
    
    return answer;
}