function solution(n) {
    const nLen = n.toString(2).split("0").join("").length;
    let result = 0;
    let num = n;
    
    while (nLen !== result) {
        num++;
        result = num.toString(2).split("0").join("").length;
    }
    
    return num;
}