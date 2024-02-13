function solution(strArr) {
//     const answer = [];
    
//     strArr.forEach((value, key) => {
//         answer[key] = key%2 === 0 ? value.toLowerCase() : value.toUpperCase();
//     })
    
//     return answer;
    
    return strArr.map((v, i) => {
        return strArr[i] = i%2 === 0 ? v.toLowerCase() : v.toUpperCase();
    })
}