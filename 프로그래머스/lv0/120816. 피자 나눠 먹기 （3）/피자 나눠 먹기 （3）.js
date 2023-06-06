function solution(slice, n) {
    var pizza = 1;
    while (slice * pizza - n < 0) {
        pizza++;
    }
    return pizza;
}