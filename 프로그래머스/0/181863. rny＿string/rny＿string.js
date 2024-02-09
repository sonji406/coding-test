function solution(rny_string) {
    return [...rny_string].map(x => {
        return x === 'm' ? 'rn' : x;
    }).join('');
}