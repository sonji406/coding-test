function solution(age) {
    var answer = '';
    const proArray = ['a','b','c','d','e','f','g','h','i','j'];
    const ageArray = Array.from(String(age),Number);    
    
    for (const num of ageArray) {
        answer += proArray[num];
    }
    
    return answer;
}