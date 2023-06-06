function solution(my_string) {
    var answer =  Array.from(my_string);
    const right = answer.reduceRight((prev, cur) => prev + cur);

    return right;
}