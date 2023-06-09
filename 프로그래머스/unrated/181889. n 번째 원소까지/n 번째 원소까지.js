function solution(num_list, n) {
    const result = num_list.filter((element, index) => index < n)
    return result;
}