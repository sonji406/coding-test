function solution(number, k) {    
    const stack = [];
    let remove = k;
    
    for (i=0; i<number.length; i++) {
        
        while(remove > 0 && stack.length > 0 && stack[stack.length-1] < number[i]) {
            stack.pop();
            remove--;
        }
        
        stack.push(number[i]);
    }
    
    if(remove > 0) {
        stack.splice(stack.length - remove, remove);
    }
    
    return stack.join('');
}