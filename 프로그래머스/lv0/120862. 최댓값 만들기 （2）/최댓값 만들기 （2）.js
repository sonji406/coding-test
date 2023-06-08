function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const positiveMultiply = numbers[0] * numbers[1]; 
    const negativeMultiply = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return positiveMultiply >= negativeMultiply ? positiveMultiply : negativeMultiply;
}