function solution(n) {
    let pizza = 1;
    while (7 * pizza - n < 0) {
        pizza++;
    }
    return pizza;
}