function solution(num_list, n) {
    var answer = [];
    let arr = [];
    
    for (let i = 0; i < num_list.length; i++) {
        arr.push(num_list[i]);
        
        if (arr.length === n) {
            answer.push(arr);
            arr = arr.slice(n);  
        }
    }
        
    return answer;
}
