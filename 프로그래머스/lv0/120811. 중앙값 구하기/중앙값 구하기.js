function solution(array) {
    const middle = Math.ceil(array.length/2);
    array.sort((a, b) => a - b);
    
    return array[middle-1];
}