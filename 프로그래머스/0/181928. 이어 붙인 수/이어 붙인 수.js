function solution(num_list) {
    let even = [];
    let odd = [];
    
    num_list.forEach((x) => x%2 === 0 ? even.push(x) : odd.push(x));
    
    return Number(even.join('')) + Number(odd.join(''));
}